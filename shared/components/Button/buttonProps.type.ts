export type ButtonProps = {
    type: 'button' | 'submit' | 'reset',
    text: string,
    styles: string,
    onBtnClick?: (event: React.MouseEvent) => void,
}