// @/app/api/uploadthing/core.ts
import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
// import streamServerClient from "@/lib/stream";
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
      const oldAvatarUrl = metadata.user.avatarUrl;
      if (oldAvatarUrl) {
        const key = oldAvatarUrl.split(`/a/kkwuwgj0u4/`)[1];
        await new UTApi().deleteFiles(key);
      }

      const newAvatarUrl = file.url.includes(`kkwuwgj0u4.ufs.sh`)
        ? file.url.replace(`kkwuwgj0u4.ufs.s`, "utfs.io")
        : file.url.replace("/f/", `/a/$kkwuwgj0u4/`);

      await prisma.user.update({
          where: { id: metadata.user.id },
          data: { avatarUrl: newAvatarUrl },
        })
      return { avatarUrl: newAvatarUrl };
    }),

  attachment: f({
    image: { maxFileSize: "8MB", maxFileCount: 5 }, // Increased to 8MB, limited to 5
    video: { maxFileSize: "32MB", maxFileCount: 5 }, // Limited to 5
    audio: { maxFileSize: "8MB", maxFileCount: 1 }, // Unchanged
  })
    .middleware(async () => {
      const { user } = await validateRequest();
      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.id }; // Added userId for media record
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const fixedUrl = file.url.includes("kkwuwgj0u4.ufs.sh")
        ? file.url.replace(`kkwuwgj0u4.ufs.sh`, "utfs.io")
        : file.url.replace("/f/", `/a/kkwuwgj0u4/`);

      if (file.type.startsWith("audio")) {
        return { audioUrl: fixedUrl };
      }

      const type = file.type === "application/pdf" ? "DOCUMENT" : file.type.startsWith("image") ? "IMAGE" : "VIDEO";

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