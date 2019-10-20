import mongoose from 'mongoose';

const modelName = 'Vote';

type VoteDocument = mongoose.Document & {
    owner: string;
    post: string;
    action: string;
};

const attributes = {
    owner: {
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
    },
    post: {
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Post',
    },
    action: {
        required: true,
        type: String,
        enum: ['upvote', 'downvote'],
    },
};

const options = {
    timestamps: true,
};

const schema = new mongoose.Schema(attributes, options);

const model = mongoose.model<VoteDocument>(modelName, schema);

export default model;
