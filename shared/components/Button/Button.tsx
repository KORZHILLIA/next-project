type ButtonProps = {
    type: 'button' | 'submit' | 'reset',
    text: string,
    styles: string,
    onBtnClick?: (event: React.MouseEvent) => void,
}

export default function Button(props: ButtonProps) {
    return (<button onClick={props.onBtnClick} type={props.type}
        className={`p-2 flex justify-center items-center border border-zinc-400 rounded-md ${props.styles}`}>
        {props.text}
    </button>);
}