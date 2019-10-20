import mongoose from 'mongoose';

const modelName = 'Post';

type PostDocument = mongoose.Document & {
    owner: string;
    content: string;
};

const attributes = {
    owner: {
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
    },
    content: {
        required: true,
        type: String,
    },
};

const options = {
    timestamps: true,
    toJSON: { virtuals: true },
};

const schema = new mongoose.Schema(attributes, options);

schema.virtual('upvotesCount', {
    ref: 'Vote',
    localField: '_id',
    foreignField: 'post',
    count: true,
    options: {
        match: { type: 'upvote' },
    },
});

schema.virtual('downvotesCount', {
    ref: 'Vote',
    localField: '_id',
    foreignField: 'post',
    count: true,
    options: {
        match: { type: 'downvote' },
    },
});

schema.pre('find', function () {
    this.populate('owner');
    this.populate('upvotesCount');
    this.populate('downvotesCount');
});

const model = mongoose.model<PostDocument>(modelName, schema);

export default model;
