import { Document } from 'mongoose';

export interface UserDTO {
    email?: string;
    password?: string;
    firstname?: string;
    lastname?: string;
    position?: string;
}

export interface User {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    position: string;
}

//TODO: Extend le type LeanDocument que l'on met qquepart dans l'app (avec uniquement un _id)
export interface UserLeaned extends /* LeanDocument, */ User {
    _id: string;
}

export interface UserDocument extends Document, User {}

export interface UserCredentials {
    email: string;
    password: string;
}
