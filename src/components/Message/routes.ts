import { Router } from "express";
const router = Router();

import authenticateUser from "../../middlewares/authenticateUser";

import * as validators from "./validators";

import * as controller from "./controller";

router.use(authenticateUser);

router.post("/messages", validators.createOne, controller.createOne);
router.get("/messages", validators.readMany, controller.readMany);

export default router;
