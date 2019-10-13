import { Request, Response } from "express";

import Message from "./model";
import User from "../User/model";

import { handleErrorReponse } from "../../core/errors";
import errorMessage from "../../config/errors/messages.json";

export async function createOne(req: Request, res: Response) {

    try {
        const receiverEmail = req.body.to;

        // Check if receiver exists
        const receiver = await User.findOne().where("email").equals(receiverEmail).exec();

        if (receiver === null) {
            throw new Error(errorMessage.userDoesNotExist);
        }

        const message = new Message({
            owner: req.authUser._id,
            receiver: receiver._id,
            content: req.body.content
        });

        await message.save();

        res.json({ create: "done" });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}

export async function readMany(req: Request, res: Response) {

    try {
        const messages = await Message.find().exec();

        res.json({ data: messages });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
