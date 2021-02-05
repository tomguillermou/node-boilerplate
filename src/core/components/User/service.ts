import { ApiError } from '@core/models/errors';

import { jwtService, encryptionService } from '@core/services';

import User from './model';
import { UserCredentials, NewUser } from './interfaces';

export class UserService {
    constructor() {}

    /**
     * Authenticate user with given credentials.
     * @returns Signed JSON web token
     */
    async authenticateUser(credentials: UserCredentials): Promise<string> {
        const user = await User.findOne({ email: credentials.email }, '+password').exec();

        if (!user || !encryptionService.compareHash(credentials.password, user.password)) {
            throw new ApiError('Invalid credentials', 400);
        }

        const userToken = jwtService.sign(user._id);

        return userToken;
    }

    /**
     * Create a new user.
     * @returns Signed JSON web token
     */
    async createUser(newUser: NewUser): Promise<string> {
        const savedUser = await new User(newUser).save();

        const userToken = jwtService.sign(savedUser._id);

        return userToken;
    }
}
