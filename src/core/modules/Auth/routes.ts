import { Router } from 'express';

import { loginValidation, registerValidation } from './validation';
import { login, register } from './controller';

const authRoutes = Router();

authRoutes.post('/auth/login', loginValidation, login);
authRoutes.post('/auth/register', registerValidation, register);

export { authRoutes };
