import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const router = Router();

// POST /api/auth/register - Register new user
router.post('/register', AuthController.register);

// POST /api/auth/login - Login user
router.post('/login', AuthController.login);

// POST /api/auth/refresh - Refresh access token
router.post('/refresh', AuthController.refreshToken);

// POST /api/auth/logout - Logout user
router.post('/logout', AuthController.logout);

export default router;
