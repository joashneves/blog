import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
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
  // Definir o breakpoint para celulares com largura máxima de 412px
  const isMobile = useMediaQuery({ query: '(max-width: 412px)' });

  // Estado para controlar a visibilidade do menu em dispositivos móveis
  const [isMenuVisible, setIsMenuVisible] = useState(!isMobile);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className={styles.cabecario}>
      {/* Mostrar o botão "hamburger" apenas em dispositivos móveis */}
      {isMobile && (
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰ {/* Ícone do menu hamburger */}
        </button>
      )}

      {isMenuVisible ? (
      <div className={isMobile ? styles.linkLateral  : ''}>
        <Link className={styles.link} to='/' onClick={toggleMenu}>{inicio}</Link>
        <Link className={styles.link} to='/Post' onClick={toggleMenu}>{posts}</Link>
        <Link className={styles.link} to='/Project' onClick={toggleMenu}>{project}</Link>
        <Link className={styles.link} to='/Contato' onClick={toggleMenu}>{contato}</Link>
      </div>) : (<></>)
      }
    </header>
  );
}

export default Hud;
