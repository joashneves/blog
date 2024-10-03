import React, { useState, useEffect } from 'react';
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
  project = 'Portifolio',
  contato = 'Sobre mim'
}) => {
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar a visibilidade do HUD
  let lastScrollY = window.scrollY; // Posição inicial do scroll

  // Função para detectar o scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Usuário rolou para baixo, esconder HUD
      setIsVisible(false);
    } else {
      // Usuário rolou para cima, mostrar HUD
      setIsVisible(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    // Adiciona o listener de scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove o listener quando o componente é desmontado
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.cabecario} ${!isVisible ? styles.hidden : ''}`}>
      <div><a className={styles.link} href="#Inicio">{inicio}</a></div>
      <div><a className={styles.link} href="#Portifolio">{project}</a></div>
      <div><a className={styles.link} href="#Contato">{contato}</a></div>
    </header>
  );
};

export default Hud;
