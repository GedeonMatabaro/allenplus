import {  Prisma } from "@prisma/client";

// --- User Data Select ---
/**
 * Selects user data fields relevant to the NGO website, including permissions and role.
 * @param loggedInUserId - The ID of the logged-in user.
 * @returns Prisma.UserSelect object for querying user data.
 */
export function getUserDataSelect(): Prisma.UserSelect {
  return {
    id: true,
    username: true,
    displayName: true,
    email: true,
    role: true,
    isActive: true,
    avatarUrl: true,
    createdAt: true,
    permissions: {
      select: {
        id: true,
        permission: true,
        grantedAt: true,
        revokedAt: true,
      },
    },
    _count: {
      select: {
        posts: true,
        announcements: true,
        microPosts: true,
        donations: true,
        partnerships: true,
        notifications: { where: { read: false } }, // Unread notifications
      },
    },
  } satisfies Prisma.UserSelect;
}

export type UserData = Prisma.UserGetPayload<{
  select: ReturnType<typeof getUserDataSelect>;
}>;

// --- Post Data Include ---
/**
 * Includes related data for blog/news posts, including author info and engagement status.
 * @param loggedInUserId - The ID of the logged-in user.
 * @returns Prisma.PostInclude object for querying post data.
 */
export function getPostDataInclude(loggedInUserId: string): Prisma.PostInclude {
  return {
    author: {
      select: getUserDataSelect(),
    },
    attachments: {
      select: {
        id: true,
        url: true,
        type: true,
      },
    },
    likes: {
      where: { userId: loggedInUserId },
      select: { userId: true },
    },
    comments: {
      include: getCommentDataInclude(loggedInUserId, 2), // Limit comment depth to 2
    },
    _count: {
      select: {
        likes: true,
        comments: true,
      },
    },
  } satisfies Prisma.PostInclude;
}

export type PostData = Prisma.PostGetPayload<{
  include: ReturnType<typeof getPostDataInclude>;
}>;

// --- Announcement Data Include ---
/**
 * Includes related data for announcements, including author info and notifications.
 * @param loggedInUserId - The ID of the logged-in user.
 * @returns Prisma.AnnouncementInclude object for querying announcement data.
 */
export function getAnnouncementDataInclude(loggedInUserId: string): Prisma.AnnouncementInclude {
  return {
    author: {
      select: getUserDataSelect(),
    },
    attachments: {
      select: {
        id: true,
        url: true,
        type: true,
      },
    },
    notifications: {
      where: { recipientId: loggedInUserId },
      select: { id: true, type: true, read: true },
    },
    _count: {
      select: {
        notifications: true,
      },
    },
  } satisfies Prisma.AnnouncementInclude;
}

export type AnnouncementData = Prisma.AnnouncementGetPayload<{
  include: ReturnType<typeof getAnnouncementDataInclude>;
}>;

// --- MicroPost Data Include ---
/**
 * Includes related data for microblogging posts, including author info and engagement status.
 * @param loggedInUserId - The ID of the logged-in user.
 * @returns Prisma.MicroPostInclude object for querying micro-post data.
 */
export function getMicroPostDataInclude(loggedInUserId: string): Prisma.MicroPostInclude {
  return {
    author: {
      select: getUserDataSelect(),
    },
    attachments: {
      select: {
        id: true,
        url: true,
        type: true,
      },
    },
    likes: {
      where: { userId: loggedInUserId },
      select: { userId: true },
    },
    comments: {
      include: getCommentDataInclude(loggedInUserId, 2), // Limit comment depth to 2
    },
    _count: {
      select: {
        likes: true,
        comments: true,
      },
    },
  } satisfies Prisma.MicroPostInclude;
}

export type MicroPostData = Prisma.MicroPostGetPayload<{
  include: ReturnType<typeof getMicroPostDataInclude>;
}>;

// --- Comment Data Include ---
/**
 * Includes related data for comments, including user info and engagement status.
 * @param loggedInUserId - The ID of the logged-in user.
 * @param depth - The recursion depth for comment replies (default: 2).
 * @returns Prisma.CommentInclude object for querying comment data.
 */
export function getCommentDataInclude(loggedInUserId: string, depth: number = 2): Prisma.CommentInclude {
  if (depth <= 0) {
    return {
      user: {
        select: getUserDataSelect(),
      },
      likes: {
        where: { userId: loggedInUserId },
        select: { userId: true },
      },
      parent: {
        select: {
          id: true,
          content: true,
          user: {
            select: {
              id: true,
              username: true,
              displayName: true,
              avatarUrl: true,
            },
          },
        },
      },
      replies: {
        select: { id: true }, // Minimal data for replies at max depth
      },
      _count: {
        select: { likes: true, replies: true },
      },
    };
  }

  return {
    user: {
      select: getUserDataSelect(),
    },
    likes: {
      where: { userId: loggedInUserId },
      select: { userId: true },
    },
    parent: {
      select: {
        id: true,
        content: true,
        user: {
          select: {
            id: true,
            username: true,
            displayName: true,
            avatarUrl: true,
          },
        },
      },
    },
    replies: {
      include: getCommentDataInclude(loggedInUserId, depth - 1),
    },
    _count: {
      select: { likes: true, replies: true },
    },
  } satisfies Prisma.CommentInclude;
}

export type CommentData = Prisma.CommentGetPayload<{
  include: ReturnType<typeof getCommentDataInclude>;
}>;

// --- Donation Data Include ---
/**
 * Includes related data for donations, including donor info.
 * @param loggedInUserId - The ID of the logged-in user.
 * @returns Prisma.DonationInclude object for querying donation data.
 */
export function getDonationDataInclude(): Prisma.DonationInclude {
  return {
    donor: {
      select: getUserDataSelect(),
    },
  } satisfies Prisma.DonationInclude;
}

export type DonationData = Prisma.DonationGetPayload<{
  include: ReturnType<typeof getDonationDataInclude>;
}>;

// --- Partnership Data Include ---
/**
 * Includes related data for partnerships, including partner info.
 * @param loggedInUserId - The ID of the logged-in user.
 * @returns Prisma.PartnershipInclude object for querying partnership data.
 */
export function getPartnershipDataInclude(): Prisma.PartnershipInclude {
  return {
    partner: {
      select: getUserDataSelect(),
    },
  } satisfies Prisma.PartnershipInclude;
}

export type PartnershipData = Prisma.PartnershipGetPayload<{
  include: ReturnType<typeof getPartnershipDataInclude>;
}>;

// --- Update Data Include ---
/**
 * Includes related data for donor/partner updates, including author and recipients.
 * @param loggedInUserId - The ID of the logged-in user.
 * @returns Prisma.UpdateInclude object for querying update data.
 */
export function getUpdateDataInclude(loggedInUserId: string): Prisma.UpdateInclude {
  return {
    author: {
      select: getUserDataSelect(),
    },
    attachments: {
      select: {
        id: true,
        url: true,
        type: true,
      },
    },
    recipients: {
      select: {
        id: true,
        username: true,
        displayName: true,
        avatarUrl: true,
      },
    },
    notifications: {
      where: { recipientId: loggedInUserId },
      select: { id: true, type: true, read: true },
    },
  } satisfies Prisma.UpdateInclude;
}

export type UpdateData = Prisma.UpdateGetPayload<{
  include: ReturnType<typeof getUpdateDataInclude>;
}>;

// --- Notification Data Include ---
/**
 * Includes related data for notifications, including issuer and related content.
 */
export const notificationsInclude = {
  issuer: {
    select: {
      id: true,
      username: true,
      displayName: true,
      avatarUrl: true,
    },
  },
  post: {
    select: {
      id: true,
      title: true,
      content: true,
      attachments: {
        select: {
          id: true,
          url: true,
          type: true,
        },
      },
    },
  },
  microPost: {
    select: {
      id: true,
      content: true,
      attachments: {
        select: {
          id: true,
          url: true,
          type: true,
        },
      },
    },
  },
  announcement: {
    select: {
      id: true,
      title: true,
      content: true,
      attachments: {
        select: {
          id: true,
          url: true,
          type: true,
        },
      },
    },
  },
  update: {
    select: {
      id: true,
      title: true,
      content: true,
      attachments: {
        select: {
          id: true,
          url: true,
          type: true,
        },
      },
    },
  },
  comment: {
    select: {
      id: true,
      content: true,
    },
  },
} satisfies Prisma.NotificationInclude;

export type NotificationData = Prisma.NotificationGetPayload<{
  include: typeof notificationsInclude;
}>;

// --- AdminAction Data Include ---
/**
 * Includes related data for admin actions, including admin and target user.
 * @param loggedInUserId - The ID of the logged-in user.
 * @returns Prisma.AdminActionInclude object for querying admin action data.
 */
export function getAdminActionDataInclude(): Prisma.AdminActionInclude {
  return {
    admin: {
      select: getUserDataSelect(),
    },
    targetUser: {
      select: {
        id: true,
        username: true,
        displayName: true,
        role: true,
      },
    },
  } satisfies Prisma.AdminActionInclude;
}

export type AdminActionData = Prisma.AdminActionGetPayload<{
  include: ReturnType<typeof getAdminActionDataInclude>;
}>;

// --- Pagination Interfaces ---
export interface PostsPage {
  posts: PostData[];
  nextCursor: string | null;
}

export interface MicroPostsPage {
  microPosts: MicroPostData[];
  nextCursor: string | null;
}

export interface AnnouncementsPage {
  announcements: AnnouncementData[];
  nextCursor: string | null;
}

export interface UpdatesPage {
  updates: UpdateData[];
  nextCursor: string | null;
}

export interface DonationsPage {
  donations: DonationData[];
  nextCursor: string | null;
}

export interface PartnershipsPage {
  partnerships: PartnershipData[];
  nextCursor: string | null;
}

export interface NotificationsPage {
  notifications: NotificationData[];
  nextCursor: string | null;
}

// --- Feed Interface ---
/**
 * Unified feed for posts, micro-posts, and announcements.
 */
export interface FeedPage {
  feed: Array<
    | { type: "post"; data: PostData }
    | { type: "microPost"; data: MicroPostData }
    | { type: "announcement"; data: AnnouncementData }
  >;
  nextCursor: string | null;
}

// --- Utility Interfaces ---
/**
 * Like information for posts, micro-posts, and comments.
 */
export interface LikeInfo {
  likes: number; // From _count.likes
  isLikedByUser: boolean; // From likes array
}

/**
 * Notification count for unread notifications.
 */
export interface NotificationCountInfo {
  unreadCount: number; // From _count.notifications
}

/**
 * Attachment interface for media uploads.
 */
export interface Attachment {
  file: File;
  mediaId?: string;
  isUploading: boolean;
  placeholderUrl?: string;
}

/**
 * Media attachment for posts, micro-posts, announcements, and updates.
 */
export interface MediaAttachment extends Attachment {
  type: "IMAGE" | "VIDEO" | "AUDIO" | "DOCUMENT";
  url?: string;
}

/**
 * Shareable item for social sharing.
 */
export interface ShareableItem {
  type: "post" | "microPost" | "announcement" | "update";
  id: string;
  title: string;
  url: string; // Absolute URL (e.g., https://your-ngo.org/post/123)
  originalUser: { username: string; displayName: string };
  post?: PostData;
  microPost?: MicroPostData;
  announcement?: AnnouncementData;
  update?: UpdateData;
}

export interface ShareButtonProps {
  sharedItem: ShareableItem;
  className?: string;
}

// --- Allowed Media Types ---
export const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", ];
export const ALLOWED_VIDEO_TYPES = ["video/mp4", "video/webm"];
export const ALLOWED_DOCUMENT_TYPES = ["application/pdf"];
export const ALLOWED_AUDIO_TYPES = ["audio/mpeg", "audio/wav", "audio/ogg", "audio/mp3", ];