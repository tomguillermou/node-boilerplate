import mongoose from 'mongoose';

import { encryptionService } from '@core/services';

import { UserDocument } from './interfaces';

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
UserSchema.pre<UserDocument>(
  'save',
  function preSaveUser(next: mongoose.HookNextFunction) {
    if (this.isModified('password')) {
      this.password = encryptionService.encrypt(this.password);
    }
    next();
  },
);

export const UserModel = mongoose.model<UserDocument>('User', UserSchema);
