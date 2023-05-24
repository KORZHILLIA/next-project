import { FieldErrors } from "react-hook-form";


export type InputProps = {
    type: 'text' | 'tel' | 'email' | 'number' | 'checkbox' | 'radio' | 'submit',
    name: string,
    placeholder?: string,
    inputStyles?: string,
    errorStyles?: string,
    register: Function,
    options: Object,
    errors: FieldErrors,
    errorMessage?: string,
};