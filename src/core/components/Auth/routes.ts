import { Router } from 'express';
const router = Router();

import { authValidation, authController } from './';

router.post('/auth/login', authValidation.login, authController.login);
router.post('/auth/register', authValidation.register, authController.register);

export default router;
