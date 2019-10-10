import mongoose from "mongoose";

const modelName = "Approbation";

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
    post: {
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Post"
    },
    approves: {
        required: true,
        type: Boolean
    }
};

const options = {
    timestamps: true
};

const schema = new mongoose.Schema(attributes, options);

const model = mongoose.model<PostDocument>(modelName, schema);

export default model;
