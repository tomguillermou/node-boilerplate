import { Request, Response } from 'express';
import { handleErrorReponse } from '../../core/errors';
import Post from './model';

export async function createOne(req: Request, res: Response) {

    try {
        const newPost = new Post({
            owner: req.authUser._id,
            content: req.body.content,
        });

        await newPost.save();

        res.json({ create: 'done' });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}

export async function readMany(req: Request, res: Response) {

    try {
        const posts = await Post.find().sort('-createdAt').exec();

        res.json({ data: posts });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
