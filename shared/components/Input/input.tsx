import { FieldErrors} from "react-hook-form";

type InputProps = {
    type: 'text' | 'tel' | 'email' | 'number' | 'checkbox' | 'radio' | 'submit',
    name: string,
    inputStyles?: string,
    errorStyles?: string,
    register: Function,
    options: Object,
    errors: FieldErrors,
    errorMessage?: string,
};

export default function Input(props: InputProps) {
    const {type, name, inputStyles, errorStyles, register, options, errors, errorMessage } = props;
    return <>
        <input type={type} className={`${errors[name] ? 'border-red-500' : 'border-zinc-400'} ${inputStyles}`}
            {...register(name, options)} />
        <span className={`${errorStyles} ${errors[name] ? 'scale-100 transition duration-300 transform ease-in-out': 'scale-0 transition duration-3000 transform ease-in-out' }`}>{ errorMessage}</span>
        </>
}