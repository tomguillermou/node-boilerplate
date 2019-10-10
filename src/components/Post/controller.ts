import { Request, Response } from "express";

import Post from "./model";

import { handleErrorReponse } from "../../core/errors";

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
        const posts = await Post.find()
            .populate("owner")
            .populate("approbations")
            .exec();

        res.json({ data: posts });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
