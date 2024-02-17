import { ReactNode } from "react";
import Styles from "@/modules/inputs/textField.module.css";

interface inputProps {
    label: string;
    name: string;
    placeHolder: string;
    type?: 'number' 
}

const TextField: React.FC<inputProps> = (props) => {
    return (
        <div className={Styles.inputContainer}>
            <span className={Styles.inputLabel}>{props.label}:</span>
            <input className={Styles.textField} name={props.name} placeholder={props.placeHolder} type={props.type}/>
        </div>
        
    )
}

export default TextField;