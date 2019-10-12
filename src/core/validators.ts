import { isEmail, isLength, matches } from "validator";

import errorMessage from "../config/errors/messages.json";

export function validateEmail(email: string) {

    if (!isEmail(email)) {
        throw new Error(errorMessage.emailValidation.invalidFormat);
    }

    if (!matches(email, /@nodein.com/)) {
        throw new Error(errorMessage.emailValidation.invalidDomain);
    }
}

export function validatePassword(password: string) {

    if (!isLength(password, { min: 8 })) {
        throw new Error(errorMessage.passwordValidation.tooShort);
    }

    if (!matches(password, /\d/)) {
        throw new Error(errorMessage.passwordValidation.missingDigit);
    }

    if (!matches(password, /[a-z]/)) {
        throw new Error(errorMessage.passwordValidation.missingLowercaseLetter);
    }

    if (!matches(password, /[A-Z]/)) {
        throw new Error(errorMessage.passwordValidation.missingUppercaseLetter);
    }
}

export function validateObjectId(objectId: string) {

    if (typeof objectId !== "string" || !objectId.match(/^[0-9a-fA-F]{24}$/)) {
        throw new Error(errorMessage.objectIdValidation.invalidFormat);
    }
}
