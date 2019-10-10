import { Request, Response } from "express";

import Approbation from "./model";
import Post from "../Post/model";

import { handleErrorReponse } from "../../core/errors";
import errorMessage from "../../config/errors/messages.json";

export async function createOne(req: Request, res: Response) {

    try {
        const owner = req.authUser;
        const post = await Post.findById(req.body.post).exec();
        const approves = req.body.approves;

        if (post === null) {
            throw new Error(errorMessage.postDoesNotExist);
        }

        // Check if the post does not already have an approbation from the user
        const userApprobation = await Approbation.findOne()
            .where("owner").equals(owner)
            .where("post").equals(post)
            .exec();

        if (userApprobation !== null) {
            throw new Error(errorMessage.userAlreadyApproved);
        }

        // Create an approbation for the specified post
        const newApprobation = new Approbation({ owner, post, approves });
        await newApprobation.save();

        // Add the new approbation to the post's approbations list
        post.approbations.push(newApprobation);
        await post.save();

        res.json({ create: "done" });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
