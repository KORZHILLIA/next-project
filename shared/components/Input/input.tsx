import { FieldErrors} from "react-hook-form";

type InputProps = {
    type: string,
    name: string,
    inputStyles?: string,
    errorStyles?: string,
    register: Function,
    options: Object,
    errors: FieldErrors,
    errorMessage: string,
};

export default function Input(props: InputProps) {
    return <>
        <input type={props.type} className={`${props.errors[props.name] ? 'border-red-500' : 'border-zinc-400'} ${props.inputStyles}`}
            {...props.register(props.name, props.options)} />
        {props.errors[props.name] && <span className={props.errorStyles}>{ props.errorMessage}</span>}
        </>
}