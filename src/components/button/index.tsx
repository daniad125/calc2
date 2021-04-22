import React,{AllHtmlAttributes} from 'react';
interface ButtonProps extends AllHtmlAttributes<HTMLButtonElement> {
    onClick?: () => void;
    caption: number;
}
const ButtonNum:React.FC<ButtonProps> = ({caption,onClick}) => {
    return (
    <button type="button" onClick={onClick}>
        {caption}
    </button>
)
    };
export default ButtonNum;
