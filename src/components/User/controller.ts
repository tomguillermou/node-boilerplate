import { Request, Response } from 'express';

import User from './model';

import { handleErrorReponse } from '../../core/errors';

export async function readMany(req: Request, res: Response) {

    try {
        const { firstname, lastname, position } = req.query;

        const query = User.find();

        if (firstname) {
            query.where('firstname').regex(firstname);
        }

        if (lastname) {
            query.where('lastname').regex(lastname);
        }

        if (position) {
            query.where('position').regex(position);
        }

        const users = await query.exec();

        res.json({ data: users });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}

export async function readOne(req: Request, res: Response) {

    try {
        const { id } = req.params;

        const user = await User.findById(id).exec();

        res.json({ user });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}

export async function fetchMe(req: Request, res: Response) {

    try {
        const user = await User.findById(req.authUser._id).exec();

        res.json({ user });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
