import Titulo from "@/modules/title/Title";
import Styles from "./page.module.css";
import TextField from "@/modules/inputs/textField";
import Combo from "@/modules/inputs/combo"
import Button from "@/modules/Button/Button";

const motives = [
    {
        text:'Caja',
        value:'Caja',
    }, {
        text:'Asesoria',
        value:'Asesoria',
    }, {
        text:'Prestamos',
        value:'Prestamos',
    }, {
        text:'Consultas',
        value:'Consultas',
    }, {
        text:'Retiro de tarjetas',
        value:'retiro',
    },
]


export default function Home() {
  
    return (
      <main>
        <Titulo texto="Saca tu número"/>
        <section className={Styles.section}>
            <form className={Styles.form} action="turno?dni=446" method="POST">
                <TextField label="DNI" name="dni" placeHolder="Ingrese DNI" type="number" />
                <Combo label="Motivo" name="motive" options={motives} placeHolder=""/>
                <div className={Styles.buttonCenter}>
                    <Button style={{backgroundColor: '#F20303'}} buttonClass="primary" type="submit">Continuar</Button>
                </div>
            </form>  
        </section>
      </main>
    );
  }