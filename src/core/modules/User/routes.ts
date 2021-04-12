import { Router } from 'express';

import { authenticateUser } from '@core/middlewares';

import * as userController from './controller';
import * as userValidation from './validation';

const userRoutes = Router();

userRoutes.use(authenticateUser);

userRoutes.get('/users', userValidation.readMany, userController.readMany);
userRoutes.get('/users/me', userController.fetchMe);
userRoutes.get(
  '/users/:userId',
  userValidation.readOne,
  userController.readOne,
);

export { userRoutes };
