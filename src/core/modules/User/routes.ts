import { Router } from 'express';
const router = Router();

import { authenticateUser } from '@core/middlewares';

import * as userController from './controller';
import * as userValidation from './validation';

router.use(authenticateUser);

router.get('/users', userValidation.readMany, userController.readMany);
router.get('/users/me', userController.fetchMe);
router.get('/users/:userId', userValidation.readOne, userController.readOne);

export default router;
