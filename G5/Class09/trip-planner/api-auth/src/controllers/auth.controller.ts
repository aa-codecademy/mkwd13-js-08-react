import { Request, Response } from 'express';
import { User, IUser } from '../models/User.model';
import { JWTUtils } from '../utils/jwt.utils';
import {
  AuthRequest,
  RegisterRequest,
  AuthResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  LogoutRequest,
} from '../types/auth.types';

export class AuthController {
  static async register(req: Request<{}, AuthResponse, RegisterRequest>, res: Response): Promise<void> {
    try {
      const { email, password, name } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        res.status(400).json({ error: 'User already exists with this email' });
        return;
      }

      // Create new user
      const user = new User({ email, password, name });
      await user.save();

    


      res.status(201).json({
        
        user: {
          id: (user._id as any).toString(),
          email: user.email,
          name: user.name,
        },
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Registration failed' });
    }
  }

  static async login(req: Request<{}, AuthResponse, AuthRequest>, res: Response<AuthResponse | { error: string }>): Promise<void> {
    try {
      const { email, password } = req.body;

      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        res.status(401).json({ error: 'Invalid credentials' });
        return;
      }

      // Check password
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        res.status(401).json({ error: 'Invalid credentials' });
        return;
      }

      // Generate tokens
      const { accessToken, refreshToken } = JWTUtils.generateTokenPair(user);

      // Save refresh token to user
      user.refreshTokens.push(refreshToken);
      await user.save();

      res.json({
        accessToken,
        refreshToken,
        user: {
          id: (user._id as any).toString(),
          email: user.email,
          name: user.name,
        },
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Login failed' });
    }
  }

  static async refreshToken(req: Request<{}, RefreshTokenResponse, RefreshTokenRequest>, res: Response<RefreshTokenResponse | { error: string }>): Promise<void> {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        res.status(401).json({ error: 'Refresh token required' });
        return;
      }

      // Verify refresh token
      const decoded = JWTUtils.verifyRefreshToken(refreshToken);

      // Find user and check if refresh token exists
      const user = await User.findById(decoded.userId);
      if (!user || !user.refreshTokens.includes(refreshToken)) {
        res.status(403).json({ error: 'Invalid refresh token' });
        return;
      }

      // Generate new access token
      const accessToken = JWTUtils.generateAccessToken(user);

      res.json({ accessToken });
    } catch (error) {
      console.error('Token refresh error:', error);
      res.status(403).json({ error: 'Invalid refresh token' });
    }
  }

  static async logout(req: Request<{}, { message: string }, LogoutRequest>, res: Response<{ message: string } | { error: string }>): Promise<void> {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        res.status(400).json({ error: 'Refresh token required' });
        return;
      }

      // Verify and decode refresh token
      const decoded = JWTUtils.verifyRefreshToken(refreshToken);

      // Find user and remove refresh token
      const user = await User.findById(decoded.userId);
      if (user) {
        user.refreshTokens = user.refreshTokens.filter(token => token !== refreshToken);
        await user.save();
      }

      res.json({ message: 'Logged out successfully' });
    } catch (error) {
      console.error('Logout error:', error);
      res.status(500).json({ error: 'Logout failed' });
    }
  }
}
