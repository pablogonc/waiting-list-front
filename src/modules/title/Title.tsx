import React from 'react';
import Styles from "@/modules/title/titulo.module.css";

interface TituloProps {
    texto: string;
}

const Titulo: React.FC<TituloProps> = ({ texto }) => {
    return (
        <div className={Styles.titleBar}>
            <h1 className={Styles.title}>{texto}</h1>
        </div>
    );
};

export default Titulo;