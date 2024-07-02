import React from 'react';
import blogLogo from '/joash-icon.png';
import styles from './Hud.module.css';

interface HudProps {
  inicio: string;
  posts: string;
  project: string;
  contato: string;
}

const Hud: React.FC<HudProps> = (props) => {
    return(
        <>
        <header className={styles.cabecario}>
            <div>
            <p>{props.inicio}</p>
            <p>{props.posts}</p>
            <p>{props.project}</p>
            <p>{props.contato}</p>
            </div>

        </header ></>
    )
}

export default Hud;