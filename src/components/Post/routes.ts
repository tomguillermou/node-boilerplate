import { Router } from "express";
const router = Router();

import authenticateUser from "../../middlewares/authenticateUser";

import * as validators from "./validators";

import * as controller from "./controller";

router.use(authenticateUser);

router.post("/posts", validators.createOne, controller.createOne);
router.get("/posts", validators.readMany, controller.readMany);
// router.delete("/posts/:id", validators.deleteOne, controller.deleteOne);

export default router;
