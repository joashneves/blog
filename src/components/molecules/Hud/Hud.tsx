import React from 'react';
import { Link } from 'react-router-dom';
import blogLogo from '/joash-icon.png';
import styles from './Hud.module.css';

interface HudProps {
  inicio: string;
  posts: string;
  project: string;
  contato: string;
}

const Hud: React.FC<HudProps> = (props) => {
  return (
    <header className={styles.cabecario}>
      <div>
        <Link className={styles.link} to='/'>{props.inicio}</Link>
        <Link className={styles.link} to='/Post'>{props.posts}</Link>
        <Link className={styles.link} to='/Project'>{props.project}</Link>
        <Link className={styles.link} to='/Contato'>{props.contato}</Link>
      </div>
    </header>
  );
}

export default Hud;
