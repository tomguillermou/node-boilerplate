import bcrypt from 'bcrypt';

const SALT_ROUNDS = Number.parseInt(process.env.SALT_ROUNDS as string);

export function compareHash(plaintext: string, hash: string): boolean {
    return bcrypt.compareSync(plaintext, hash);
}

export function encrypt(plaintext: string): string {
    return bcrypt.hashSync(plaintext, SALT_ROUNDS);
}
