import { DocumentType } from "../enums/type-document.enum";

export interface UserDTO{
    id?: number;
    name?: string;
    lastName?: String;
    type_document?: DocumentType;
    numberDocument?: number;
    email?: String;
    message?: String;
}