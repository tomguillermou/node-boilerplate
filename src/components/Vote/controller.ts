import { Request, Response } from 'express';

import Post from '../Post/model';
import Vote from './model';

import errorMessage from '../../config/errors/messages.json';
import { handleErrorReponse } from '../../core/errors';

export async function createOne(req: Request, res: Response) {

    try {
        const ownerId = req.authUser._id;
        const postId = req.body.postId;
        const type = req.body.type;

        // Check if the post exists
        const post = await Post.findById(postId).exec();

        if (post === null) {
            throw new Error(errorMessage.postDoesNotExist);
        }

        // Check if the post does not already have a vote from the user
        const userVote = await Vote.findOne()
            .where('owner').equals(ownerId)
            .where('post').equals(postId)
            .exec();

        if (userVote !== null) {
            throw new Error(errorMessage.userAlreadyVoted);
        }

        // Create a vote for the specified post
        const newVote = new Vote({
            owner: ownerId,
            post: postId,
            type,
        });

        await newVote.save();

        // Add the new vote to the post's votes list
        post.votes.push(newVote);

        await post.save();

        res.json({ create: 'done' });

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
