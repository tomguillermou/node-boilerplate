import mongoose from 'mongoose';

import { encryptionService } from '@core/services';

const modelName = 'User';

type UserDocument = mongoose.Document & {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    position: string;
};

const attributes = {
    email: {
        required: true,
        type: String,
        unique: true,
    },
    password: {
        required: true,
        select: false,
        type: String,
    },
    firstname: {
        required: true,
        type: String,
    },
    lastname: {
        required: true,
        type: String,
    },
    position: {
        required: true,
        type: String,
    },
};

const options = {};

const UserSchema = new mongoose.Schema(attributes, options);

// Encrypt password
UserSchema.pre<UserDocument>('save', function (next: mongoose.HookNextFunction) {
    if (this.isModified('password')) {
        this.password = encryptionService.encrypt(this.password);
    }
    next();
});

const UserModel = mongoose.model<UserDocument>(modelName, UserSchema);

export default UserModel;
