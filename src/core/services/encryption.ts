import bcrypt from 'bcrypt';

export class EncryptionService {
    private readonly saltRounds = 10;

    constructor() {}

    public compareHash(plaintext: string, hash: string): boolean {
        return bcrypt.compareSync(plaintext, hash);
    }

    public encrypt(plaintext: string): string {
        return bcrypt.hashSync(plaintext, this.saltRounds);
    }
}
