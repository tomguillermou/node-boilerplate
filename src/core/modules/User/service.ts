import { ApiError } from '@core/models';

import { jwtService, encryptionService } from '@core/services';

import { User, UserCredentials, UserDTO } from './interfaces';
import { UserModel } from './model';

/**
 * Authenticate user with given credentials.
 * @returns Signed JSON web token
 */
export async function authenticateUser(credentials: UserCredentials): Promise<string> {
    const user = await UserModel.findOne({ email: credentials.email }, '+password').exec();

    if (!user || !encryptionService.compareHash(credentials.password, user.password)) {
        throw new ApiError(400, 'invalid_credentials');
    }

    return jwtService.sign(user._id);
}

/**
 * Create a new user.
 * @returns Signed JSON web token
 */
export async function createUser(newUser: UserDTO): Promise<string> {
    const user = new UserModel(newUser);
    await user.save();

    return jwtService.sign(user._id);
}

/**
 * Find user with given ID.
 * @returns User found, and null otherwise
 */
export async function findUser(id: string): Promise<User> {
    const user = await UserModel.findById(id).lean().exec();

    return user as User;
}
