import { Request, Response } from "express";

import User from "./model";

import { handleErrorReponse } from "../../core/errors";

export async function readMany(req: Request, res: Response) {

    try {
        const users = await User.find().exec();

        res.json({ data: users });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
