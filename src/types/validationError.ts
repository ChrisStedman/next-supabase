interface Errors {
    title?: string[];
    description?: string[];
}

interface ServerErrors {
    errors?: Errors;
    serverError?: string;
}


export type ValidationError = ServerErrors