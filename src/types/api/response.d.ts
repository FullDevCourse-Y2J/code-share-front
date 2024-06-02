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
