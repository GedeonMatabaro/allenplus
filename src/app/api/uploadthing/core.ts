import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError, UTApi } from "uploadthing/server";

const f = createUploadthing();

export const fileRouter = {
  avatar: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const { user } = await validateRequest();
      if (!user) throw new UploadThingError("Unauthorized");
      return { user };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      if (!process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID) {
        throw new Error("Missing NEXT_PUBLIC_UPLOADTHING_APP_ID");
      }

      const oldAvatarUrl = metadata.user.avatarUrl;
      if (oldAvatarUrl) {
        const key = oldAvatarUrl.split(`/a/${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}/`)[1];
        if (key) {
          await new UTApi().deleteFiles(key);
        }
      }

      const newAvatarUrl = file.url.includes(`${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}.ufs.sh`)
        ? file.url.replace(`${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}.ufs.sh`, "utfs.io")
        : file.url.replace("/f/", `/a/${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}/`);

      // Skip Prisma operations during build
      if (process.env.NODE_ENV !== "production") {
        return { avatarUrl: newAvatarUrl };
      }

      await prisma.user.update({
        where: { id: metadata.user.id },
        data: { avatarUrl: newAvatarUrl },
      });

      return { avatarUrl: newAvatarUrl };
    }),

  attachment: f({
    image: { maxFileSize: "8MB", maxFileCount: 5 },
    video: { maxFileSize: "32MB", maxFileCount: 5 },
    audio: { maxFileSize: "8MB", maxFileCount: 1 },
  })
    .middleware(async () => {
      const { user } = await validateRequest();
      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      if (!process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID) {
        throw new Error("Missing NEXT_PUBLIC_UPLOADTHING_APP_ID");
      }

      const fixedUrl = file.url.includes(`${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}.ufs.sh`)
        ? file.url.replace(`${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}.ufs.sh`, "utfs.io")
        : file.url.replace("/f/", `/a/${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}/`);

      if (file.type.startsWith("audio")) {
        return { audioUrl: fixedUrl };
      }

      const type = file.type === "application/pdf" ? "DOCUMENT" : file.type.startsWith("image") ? "IMAGE" : "VIDEO";

      // Skip Prisma operations during build
      if (process.env.NODE_ENV !== "production") {
        return { mediaId: null };
      }

      const media = await prisma.media.create({
        data: {
          url: fixedUrl,
          type,
        },
      });

      return { mediaId: media.id };
    }),
} satisfies FileRouter;

export type AppFileRouter = typeof fileRouter;