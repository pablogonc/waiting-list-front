import Titulo from "@/modules/title/Title";
import Styles from "./page.module.css";

const turnos = [
    {
        state:'pendiente',
        type:'caja',
        sucursal:'floresta',
        dir: 'AV Alvarez Jonte 5552',
        date: '15/02/2024',
        dateTime: '15:40',
        estimatedTime: '02:20:00',
    },
    {
        state:'pendiente',
        type:'caja',
        sucursal:'floresta',
        dir: 'AV Alvarez Jonte 5552',
        date: '15/02/2024',
        dateTime: '15:40',
        estimatedTime: '02:20:00',
    },
    {
        state:'pendiente',
        type:'caja',
        sucursal:'floresta',
        dir: 'AV Alvarez Jonte 5552',
        date: '15/02/2024',
        dateTime: '15:40',
        estimatedTime: '02:20:00',
    },
    {
        state:'pendiente',
        type:'caja',
        sucursal:'floresta',
        dir: 'AV Alvarez Jonte 5552',
        date: '15/02/2024',
        dateTime: '15:40',
        estimatedTime: '02:20:00',
    },
    {
        state:'pendiente',
        type:'caja',
        sucursal:'floresta',
        dir: 'AV Alvarez Jonte 5552',
        date: '15/02/2024',
        dateTime: '15:40',
        estimatedTime: '02:20:00',
    },
    {
        state:'pendiente',
        type:'caja',
        sucursal:'floresta',
        dir: 'AV Alvarez Jonte 5552',
        date: '15/02/2024',
        dateTime: '15:40',
        estimatedTime: '02:20:00',
    }
]


export default function Home() {
  
    return (
      <main>
        <Titulo texto="Turnos"/>
        <section>
           
           <button className="primaryButton">Sacar turno</button>
            
            <div className="fullContainer">
                <h1 className="subTitle">Mis turnos</h1>
                <div className= {Styles.turnGrid}>
                    {turnos.map( (turn,index) => 
                        <div key={index} className={Styles.turnItem} style={{boxShadow: `inset -24px 0px 0px 0px ${index==1?'#5b5a5a':'#ffb100'}`}}>
                            <img src='https://static.thenounproject.com/png/526867-200.png' alt="" />
                            <div className={Styles.cardInfo}>
                                <span><bold>{turn.type}</bold></span>
                                <span>Sucursal: {turn.dir}. {turn.sucursal}</span>
                                <span>Fecha:{turn.date} {turn.dateTime}</span>
                                <span>Tiempo Restante: {turn.estimatedTime}</span>
                            </div>
                            
                            
                        </div>
                    )}
                </div>
            </div>

        </section>
      </main>
    );
  }