import jwt from "jsonwebtoken";
import { IUser } from "../models/User.model";

const ACCESS_TOKEN_SECRET =
  process.env.JWT_ACCESS_SECRET || "your-access-secret-key";
const REFRESH_TOKEN_SECRET =
  process.env.JWT_REFRESH_SECRET || "your-refresh-secret-key";
const ACCESS_TOKEN_EXPIRES_IN = "30s";
const REFRESH_TOKEN_EXPIRES_IN = "7d";

export interface TokenPayload {
  userId: string;
  email: string;
}

export class JWTUtils {
  static generateAccessToken(user: IUser): string {
    const payload: TokenPayload = {
      userId: (user._id as any).toString(),
      email: user.email,
    };

    return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    });
  }

  static generateRefreshToken(user: IUser): string {
    const payload: TokenPayload = {
      userId: (user._id as any).toString(),
      email: user.email,
    };

    return jwt.sign(payload, REFRESH_TOKEN_SECRET, {
      expiresIn: REFRESH_TOKEN_EXPIRES_IN,
    });
  }

  static verifyAccessToken(token: string): TokenPayload {
    return jwt.verify(token, ACCESS_TOKEN_SECRET) as TokenPayload;
  }

  static verifyRefreshToken(token: string): TokenPayload {
    return jwt.verify(token, REFRESH_TOKEN_SECRET) as TokenPayload;
  }

  static generateTokenPair(user: IUser): {
    accessToken: string;
    refreshToken: string;
  } {
    return {
      accessToken: this.generateAccessToken(user),
      refreshToken: this.generateRefreshToken(user),
    };
  }
}
