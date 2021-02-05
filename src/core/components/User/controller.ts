import { Request, Response } from 'express';

import { responseService } from '@core/services';

import User from './model'; // TODO: remove and use service instead

export class UserController {
    constructor() {}

    async readMany(req: Request, res: Response) {
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

            const users = await query.lean().exec();

            res.json({ data: users });
        } catch (error) {
            responseService.sendError(res, error);
        }
    }

    async readOne(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const user = await User.findById(id).exec();

            res.json({ user });
        } catch (error) {
            responseService.sendError(res, error);
        }
    }

    async fetchMe(req: Request, res: Response) {
        try {
            const user = await User.findById(req.authUser._id).exec();

            res.json({ user });
        } catch (error) {
            responseService.sendError(res, error);
        }
    }
}
