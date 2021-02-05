import { Request, Response } from 'express';

import { responseService } from '@core/services';

import { userService } from '@core/components/User';

export class AuthController {
    constructor() {}

    async login(req: Request, res: Response) {
        try {
            const userToken = await userService.authenticateUser({
                email: req.body.email,
                password: req.body.password,
            });

            res.json({ token: userToken });
        } catch (error) {
            responseService.sendError(res, error);
        }
    }

    async register(req: Request, res: Response) {
        try {
            const userToken = await userService.createUser({
                email: req.body.email,
                password: req.body.position,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                position: req.body.position,
            });

            res.json({ token: userToken });
        } catch (error) {
            responseService.sendError(res, error);
        }
    }
}
