import mongoose from "mongoose";

const modelName = "Post";

type PostDocument = mongoose.Document & {
    owner: string;
    content: string;
    likes: number;
    dislikes: number;
};

const attributes = {
    owner: {
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    content: {
        required: true,
        type: String
    },
    likes: {
        required: true,
        type: Number,
        default: 0
    },
    dislikes: {
        required: true,
        type: Number,
        default: 0
    }
};

const options = {
    timestamps: true
};

const schema = new mongoose.Schema(attributes, options);

const model = mongoose.model<PostDocument>(modelName, schema);

export default model;
