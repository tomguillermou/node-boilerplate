import { Request, Response } from "express";

import Post from "./model";

import { handleErrorReponse } from "../../core/errors";
import errorMessage from "../../config/errors/messages.json";

export async function createOne(req: Request, res: Response) {

    try {
        const newPost = new Post({
            owner: req.authUser._id,
            content: req.body.content
        });

        await newPost.save();

        res.json({ create: "done" });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}

export async function readMany(req: Request, res: Response) {

    try {
        const posts = await Post.find().exec();

        res.json({ posts });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
