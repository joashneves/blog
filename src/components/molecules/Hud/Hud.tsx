import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hud.module.css';

interface HudProps {
  inicio?: string;
  posts?: string;
  project?: string;
  contato?: string;
}

const Hud: React.FC<HudProps> = ({
      inicio = 'Inicio',
      posts = 'Posts',
      project = 'Portifolio',
      contato = 'Contato'
    }) => {
  return (
    <header className={styles.cabecario}>
      <div>
        <Link className={styles.link} to='/'>{inicio}</Link>
        <Link className={styles.link} to='/Post'>{posts}</Link>
        <Link className={styles.link} to='/Project'>{project}</Link>
        <Link className={styles.link} to='/Contato'>{contato}</Link>
      </div>
    </header>
  );
}

export default Hud;
