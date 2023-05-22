import { ButtonProps } from "./buttonProps.type";

export default function Button(props: ButtonProps) {
    const {type, styles, text } = props;
    return (<button onClick={props.onBtnClick} type={type}
        className={`p-2 flex justify-center items-center border border-zinc-400 rounded-md ${styles}`}>
        {text}
    </button>);
}