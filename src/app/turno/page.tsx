'use client'
import { useState, useEffect } from 'react';
import styles from "./page.module.css";

const turn = {
  position: 22,
  name: 'juan',
  estimatedTime: {
    hours: 2,
    minutes: 45,
    seconds: 0
  },
  code: 'A05',
  type: 'caja',
  sucursal: 'Floresta'
}

export default function Home() {

  const [timeLeft, setTimeLeft] = useState<number>(turn.estimatedTime.hours * 3600 + turn.estimatedTime.minutes * 60 + turn.estimatedTime.seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft > 0) {
          return prevTimeLeft - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []); 

  const formatTimeLeft = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <main className={styles.main}>
      <div className={styles.turn}>
        
        <div className={styles.titleBar}>
          <span className={styles.sectionTitle}>Gestion de turnos</span>
        </div>

        <div className={styles.item}>
          <div className={styles.itemTitle}>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/queue-icon.png" alt="" />
            <span className={styles.text}>Turnos restantes</span>
          </div>

          <span className={styles.number}>{turn.position}</span>
        </div>

        <div className={styles.item}>
        <div className={styles.itemTitle}>
            <img src="https://static.thenounproject.com/png/1061038-200.png" alt="" />
            <span className={styles.text}>Espera aproximada</span>
          </div>
          
          <span className={styles.number}>{formatTimeLeft(timeLeft)}</span>
        </div>

        <div className={styles.item}>
          <span className={styles.sectionTitle}>Turno</span>
          <div className={styles.ticket}>
            <span className={styles.turnText}>{turn.code}</span>
            <span className={styles.textTurnType}>{turn.type}</span>
          </div>
          <button className={styles.textButton} onClick={() => window.confirm("Esta por cancelar su turno. ¿Desea continuar con la calcelacon?")}>Cancelar turno</button>
        </div>

      </div>
    </main>
  );
}
