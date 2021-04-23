import { Router } from 'express';

import { authenticateUser } from '@core/middlewares';

import { fetchMe, readManyUsers, readOneUser } from './controller';
import { readManyUsersValidation, readOneUserValidation } from './validation';

const userRoutes = Router();

userRoutes.use(authenticateUser);

userRoutes.get('/users', readManyUsersValidation, readManyUsers);
userRoutes.get('/users/me', fetchMe);
userRoutes.get('/users/:userId', readOneUserValidation, readOneUser);

export { userRoutes };
