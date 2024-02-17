import Titulo from "@/modules/title/Title";
import Styles from "./page.module.css";

const sucursal = [
    {
        state:'pendiente',
        type:'caja',
        sucursal:'floresta',
        dir: 'AV Alvarez Jonte 5552',
        date: '15/02/2024',
        dateTime: '15:40',
        estimatedTime: '02:20:00',
    },
]


export default function Home() {
  
    return (
      <main>
        <Titulo texto="Saca tu número"/>
        <section>
            
                <div className="item">
                    <div className="itemTitle">
                        <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_location_on_48px-512.png" alt="" />
                        <span className="subTitle">Sucursal</span>
                    </div>

                    <span className="focusText">Flores</span>
                </div>

                <div className="item">
                    <div className="itemTitle">
                        <span className="subTitle">DNI</span>
                    </div>

                    <input type="number" placeholder="Ingrese su DNI" />
                </div>

                <div className="item">
                    <div className="itemTitle">
                        <span className="subTitle">Motivo</span>
                    </div>

                    <select>
                        <option value="caja">seleccone</option>
                        <option value="caja">caja</option>
                        <option value="caja">fidelcomiso</option>
                        <option value="caja">cerrar banco central</option>
                        <option value="caja">caja</option>
                    </select>
                </div>

                <button className="primaryButton">Continuar</button>

            

        </section>
      </main>
    );
  }