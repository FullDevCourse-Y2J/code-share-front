export interface CommonRes {
  isSuccess: boolean;
  message: string;
}

export interface LoginRes extends CommonRes {
  userId?: string;
  accessToken?: string;
}

export interface EmailCheckRes extends CommonRes {
  result?: boolean;
}

export interface UserInfoRes extends CommonRes {
  result: {
    userId: string;
    nickname: string;
    level: number;
    totalPosts: number;
    totalPoints: number;
  };
}

export interface TopFiveRes extends CommonRes {
  id: string;
  name: string;
  level: number;
  points: number;
}

export interface Post {
  postId: number;
  title: string;
  categoryId: number;
  totalComments: number;
  writer: string;
  createdAt: string;
}

export interface PostsRes extends CommonRes {
  result: Post[];
}
