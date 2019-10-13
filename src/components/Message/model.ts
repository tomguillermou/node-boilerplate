import mongoose from "mongoose";

const modelName = "Message";

type MessageDocument = mongoose.Document & {
    owner: string;
    receiver: string;
    content: any;
};

const attributes = {
    owner: {
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    receiver: {
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    content: {
        required: true,
        type: String
    }
};

const options = {
    timestamps: true
};

const schema = new mongoose.Schema(attributes, options);

const model = mongoose.model<MessageDocument>(modelName, schema);

export default model;
