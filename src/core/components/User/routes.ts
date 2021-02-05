import { Router } from 'express';
const router = Router();

import authenticateUser from '@core/middlewares/authenticateUser';

import { userController, userValidation } from './';

router.use(authenticateUser);

router.get('/users', userValidation.readMany, userController.readMany);
router.get('/users/me', userController.fetchMe);
router.get('/users/:id', userValidation.readOne, userController.readOne);

export default router;
