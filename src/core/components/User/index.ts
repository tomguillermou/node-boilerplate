import { UserController } from './controller';
import { UserService } from './service';
import { UserValidation } from './validation';

export const userController = new UserController();
export const userService = new UserService();
export const userValidation = new UserValidation();
