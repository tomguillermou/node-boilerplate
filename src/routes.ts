import { Router } from 'express';
const router = Router();

import authRoutes from '@core/components/Auth/routes';
import userRoutes from '@core/components/User/routes';

router.use(authRoutes);
router.use(userRoutes);

export default router;
