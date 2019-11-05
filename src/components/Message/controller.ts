import { Request, Response } from 'express';

import User from '../User/model';
import Message from './model';

import errorMessage from '../../config/errors/messages.json';
import { handleErrorReponse } from '../../core/errors';

export async function createOne(req: Request, res: Response) {

    try {
        const receiverId = req.body.receiverId;
        const content = req.body.content;

        // Check if receiver exists
        const receiver = await User.findById(receiverId).exec();

        if (receiver === null) {
            throw new Error(errorMessage.userDoesNotExist);
        }

        const message = new Message({
            owner: req.authUser._id,
            receiver: receiverId,
            content,
        });

        await message.save();

        res.json({ create: 'done' });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}

export async function readMany(req: Request, res: Response) {

    try {
        const ownerId = req.authUser._id;
        const receiverId = req.query.receiverId;

        const messages = await Message.find().or([
            { $and: [{ owner: ownerId }, { receiver: receiverId }] },
            { $and: [{ owner: receiverId }, { receiver: ownerId }] },
        ])
            .sort('-createdAt')
            .exec();

        res.json({ data: messages });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
