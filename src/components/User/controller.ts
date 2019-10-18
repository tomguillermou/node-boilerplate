import { Request, Response } from "express";

import User from "./model";

import { handleErrorReponse } from "../../core/errors";

export async function readMany(req: Request, res: Response) {

    try {
        const { firstname, lastname, position, email } = req.query;

        const query = User.find();

        if (firstname) {
            query.where("firstname").equals(firstname);
        }

        if (lastname) {
            query.where("lastname").equals(lastname);
        }

        if (position) {
            query.where("position").equals(position);
        }

        if (email) {
            query.where("email").equals(email);
        }

        const users = await query.exec();

        res.json({ data: users });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
