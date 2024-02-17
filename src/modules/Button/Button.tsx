import { ReactNode } from "react";
import Styles from "@/modules/Button/button.module.css";

interface ButtonProps {
    buttonClass: 'primary' | 'secondary';
    children: ReactNode;
    type?: 'submit' | 'reset' | 'button'
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button className={Styles[props.buttonClass]} type={props.type}>
            {props.children}
        </button>
    )
}

export default Button;