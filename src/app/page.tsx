import Image from "next/image";
import styles from "./page.module.css";
import waitlist from "@/data/waitList";

export default function Home() {
  
  return (
    <main className={styles.main}>
      <div className={styles.turn}>
        <h1 className={styles.title}>54</h1>
        <p  className={styles.pr}>personas delante de ti</p>
        
        <h2>cliente: Mauricio Macri</h2>
        
        <h1 className={styles.title}>3hs</h1>
        <p  className={styles.pr}>de espera aproximada</p>

        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Volver</button>
          <button className={styles.secondaryButton}>Cancelar</button>
        </div>

      </div>
      

      <div className={styles.stateBar}>
        <h1>Pendiente</h1>
      </div>

    </main>
  );
}

type ButtonProps = {
  text: string;
};

type WaitlistItemProps = {
  clientName: string;
  position: number;
  estimatedTime: number;
  waitedTime: number;
  state: 'waiting' | 'inProgress' | 'exit';
};

const WaitlistItemComponent: React.FC<WaitlistItemProps> = ({ clientName, position, estimatedTime, waitedTime, state }) => {
  return (
    <div>
      <h3>{clientName} (Position: {position})</h3>
      <p>Estimated Time: {estimatedTime} mins | Waited Time: {waitedTime} mins</p>
      <p>Status: {state}</p>
    </div>
  );
};

type WaitCard = {
  clientName: string;
  position: number;
  estimatedTime: number;
  waitedTime: number;
  state: 'waiting' | 'inProgress' | 'exit';
};

const WaitCard: React.FC<WaitlistItemProps> = ({ clientName, position, estimatedTime, waitedTime, state }) => {
  const locale = (state: string): string => {
    switch (state) {
      case 'waiting':
        return 'Esperando';
      case 'inProgress':
        return 'En Progreso';
      case 'exit':
        return 'Finalizado';
      default:
        return 'Estado Desconocido';
    }
  }

  return (
    <div className={styles.clientCardBody}>
      <div className={styles.clientCardTop} style={{backgroundColor:stateColor[state]}}></div>
      <h3>Numero: {position}</h3>
      <p>Tiempo estimado: {estimatedTime} mins</p>
      <p>Estado del turno: {locale(state)}</p>
    </div>
  );
};

const stateColor = {
  waiting: '#eedc31',
  inProgress: '#00ff83',
  exit: '#5b5b5b'
};

