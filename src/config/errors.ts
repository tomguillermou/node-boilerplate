// import { ApiError } from '@core/models/errors';

// // Bad request
// const missingAuthorizationHeader = new ApiError('Missing authorization header', 400);
// const invalidBearerToken = new ApiError('Invalid bearer token', 400);
// const invalidObjectIdFormat = new ApiError('Invalid ObjectId format', 400);

// // Internal server errors
// const missingEnvironmentVariable = new ApiError('Missing an environment variable', 500);

// export default {
//     missingEnvironmentVariable,
//     invalidBearerToken,
// };

// "passwordValidation": {
//     "tooShort": "Password must have at least 8 characters",
//     "missingDigit": "Password must have at least 1 digit",
//     "missingLowercaseLetter": "Password must have at least 1 lowercase letter",
//     "missingUppercaseLetter": "Password must have at least 1 uppercase letter"
// },
// "emailValidation": {
//     "invalidFormat": "Email address must follow format 'jsmith@example.com'",
//     "invalidDomain": "Email domain must be nodein.com"
// },
// "objectIdValidation": {
//     "invalidFormat": "Invalid ObjectId format"
// },
// "invalidCredentials": "Invalid credentials",
// "userDoesNotExist": "This user does not exist",
// "postDoesNotExist": "This post does not exist",
// "missingAuthorizationHeader": "Missing bearer token in authorization header",
// "invalidBearerToken": "Invalid bearer token",
// "authenticationFailed": "Authentication failed",
// "invalidObjectIdFormat": "Invalid ObjectId format",
// "userAlreadyVoted": "User has already voted for this post"
