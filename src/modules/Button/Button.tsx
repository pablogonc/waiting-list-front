import { ReactNode } from "react";
import Styles from "@/modules/Button/button.module.css";

interface ButtonProps {
    buttonClass: 'primary' | 'secondary';
    children: ReactNode;
    type?: 'submit' | 'reset' | 'button';
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button style={props.style} className={Styles[props.buttonClass]} type={props.type}>
            {props.children}
        </button>
    )
}

export default Button;