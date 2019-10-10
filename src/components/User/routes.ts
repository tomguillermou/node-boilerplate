import { Router } from "express";
const router = Router();

import authenticateUser from "../../middlewares/authenticateUser";

import * as userValidator from "./validators";

import * as userController from "./controller";

router.use(authenticateUser);

router.get("/users", userValidator.readMany, userController.readMany);

export default router;
