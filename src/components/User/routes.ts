import { Router } from "express";
const router = Router();

import authenticateUser from "../../middlewares/authenticateUser";

import * as userValidator from "./validators";

import * as userController from "./controller";

router.use(authenticateUser);

router.get("/users", userValidator.readMany, userController.readMany);
router.get("/users/:username", userValidator.readOne, userController.readOne);
router.patch("/users/:username", userValidator.updateOne, userController.updateOne);
router.delete("/users/:username", userValidator.deleteOne, userController.deleteOne);

export default router;
