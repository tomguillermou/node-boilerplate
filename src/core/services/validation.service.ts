import validator from 'validator';

const EMAIL_DOMAIN = '@nodein.com';

export function isValidEmail(email: string): boolean {
    return validator.isEmail(email) && email.includes(EMAIL_DOMAIN);
}

// export function isValidPassword(password: string): void {
//     const longEnough = password.length < 8;
//     const hasDigit;
//     const hasLowercase;
//     const hasUppercase;
// }

export function isValidId(id: string): boolean {
    return validator.isMongoId(id);
}
