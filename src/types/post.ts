import type { User } from '@/types/user';
// src/types/post.ts

export interface IMedia {
  id: string;
  postId: string;
  url: string;
  type: 'image' | 'video' | 'carousel';
  order: number;
  thumbnailUrl?: string;
}

export interface IComment {
  id: string;
  postId: string;
  author: User;
  content: string;
  createdAt: string;
}

export interface ILikes {
  count: number;
  sample: User[];
}

export interface IPost {
  id: string;
  author: User;
  caption: string;
  media: IMedia[];
  likes: ILikes;
  comments: IComment[];
  createdAt: string;
  updatedAt: string;
  isSaved: boolean;
  isLikedByCurrentUser: boolean;
}
