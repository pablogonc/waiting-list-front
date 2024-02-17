import Button from "@/modules/Button/Button"; 
import TextField from "@/modules/inputs/textField";
import Styles from "./page.module.css"
import Combo from "@/modules/inputs/combo";

const motives = [
  {
    text: 'caja',
    value: 'box'
  },
  {
    text: 'prestamos',
    value: 'prestamos'
  },
]

export default function Home() {

    return (
      <main className={Styles.main}>
        
        <div className={Styles.grid}>
          <Button buttonClass="primary" type="button">Continuar</Button>
          <Button buttonClass="secondary">Continuar</Button>
        </div>

        <div className={Styles.grid}>
          <TextField label="DNI" name="DNI" placeHolder="Ingrese DNI" type="number"></TextField>
          <Combo label="Motivo" name="motivo" placeHolder="" options={motives}></Combo>
        </div>
        
      </main>
    );
  }