import React, { useState, useEffect } from 'react';
import styles from './ProjectoTemplate.module.css';

interface ProjectProps {
    titulo: string;
    descricao: string;
    link: string;
    data: string;
}

const ProjectTemplate: React.FC<ProjectProps> = (props) => {
    const [previewImage, setPreviewImage] = useState<string | null>(null);
  
    useEffect(() => {
      // Chamada para a API do microlink.io para obter a pré-visualização
      fetch(`https://api.microlink.io/?url=${encodeURIComponent(props.link)}`)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'success') {
            setPreviewImage(data.data.image.url);
          }
        })
        .catch(error => console.error('Error fetching preview image:', error));
    }, [props.link]);
  
    return (
      <article className={styles.card}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {previewImage && <img src={previewImage} alt={`Preview of ${props.link}`} />}
          <div className={styles.descricao}>
            <h1>{props.titulo}</h1>
            <p>{props.descricao}</p>
            <div>{props.data}</div>
          </div>
        </a>
      </article>
    );
}

export default ProjectTemplate;
