import { DocumentType } from '../enums/type-document.enum'


export type AuthLogin = {
    type_document: DocumentType;
    document_number: number;
    password: string;
}

export type AuthRegister = {
    type_document: DocumentType;
    document_number: number;
    password: string;
    name: string;
    lastname: string;
    email: string;
}