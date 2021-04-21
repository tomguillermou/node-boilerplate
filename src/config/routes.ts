import { Router } from 'express';
const router = Router();

// Import routes here
import authRoutes from '@core/modules/Auth/routes';
import userRoutes from '@core/modules/User/routes';

// Plug routes here
router.use(authRoutes);
router.use(userRoutes);

export default router;
