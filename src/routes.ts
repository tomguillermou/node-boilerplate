import { Router } from 'express';

import { authRoutes } from '@core/modules/Auth/routes';
import { userRoutes } from '@core/modules/User/routes';

const router = Router();

router.use(authRoutes);
router.use(userRoutes);

export { router };
