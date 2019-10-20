import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import User from '../User/model';

import errorMessage from '../../config/errors/messages.json';
import { handleErrorReponse } from '../../core/errors';
import { JWT_SECRET } from '../../utils/secrets';

export async function login(req: Request, res: Response) {

    try {
        const user = await User.findOne({ email: req.body.email }, '+password').exec();

        if (user === null || !user.comparePassword(req.body.password)) {
            throw new Error(errorMessage.invalidCredentials);
        }

        const tokenData = user._id.toString();

        const encodedToken = jwt.sign(tokenData, JWT_SECRET);

        res.json({ token: encodedToken });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}

export async function register(req: Request, res: Response) {

    try {
        const user = new User({
            email: req.body.email,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            position: req.body.position,
        });

        const savedUser = await user.save();

        const tokenData = savedUser._id.toString();
        const encodedToken = jwt.sign(tokenData, JWT_SECRET);

        res.json({ token: encodedToken });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
