import { Router } from 'express';
const router = Router();

import authRoutes from '@core/modules/Auth/routes';
import userRoutes from '@core/modules/User/routes';

router.use(authRoutes);
router.use(userRoutes);

export default router;
