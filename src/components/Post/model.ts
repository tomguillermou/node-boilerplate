import mongoose from "mongoose";

const modelName = "Post";

type PostDocument = mongoose.Document & {
    owner: string;
    content: string;
    approbations: any;
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
    approbations: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Approbation" }]
};

const options = {
    timestamps: true
};

const schema = new mongoose.Schema(attributes, options);

const model = mongoose.model<PostDocument>(modelName, schema);

export default model;
