import Styles from "@/modules/inputs/combo.module.css";

interface inputProps {
    label: string;
    name: string;
    placeHolder: string;
    options: { text: string; value: string }[];
}

const Combo: React.FC<inputProps> = (props) => {
    return (
        <div className={Styles.inputContainer}>
            <span className={Styles.inputLabel}>{props.label}:</span>
            <select name={props.name} id={props.name} className={Styles.combo}>
                {props.options.map((option, index) => 
                    <option key={index} value={option.value}> {option.text} </option>
                )}
            </select>
        </div>
        
    )
}

export default Combo;