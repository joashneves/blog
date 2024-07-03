import React, { useEffect } from "react";
import styles from './PerfilInfo.module.css'

const PerfilInfo = () => {
    
  return (
    <article className={styles.perfilInfo}>
      <ul>
        <li>
          Então, se você está aqui, provavelmente já me conhece, mas para aqueles que não me conhecem, meu nome é apenas Joás, sim, ele não tem H; eu coloco para ter um charme.
        </li>
        <li>
          Atualmente estou cursando análise de sistemas e nas horas vagas sempre lendo algo sobre programação.
        </li>
        <li>
          Curto jogar um pouco, jogos, geralmente jogos para desestressar ou relaxar. Assisto também bastante filmes (preferencialmente no cinema) e algumas séries. De vez em nunca gosto também de ler um livro ou escrever enredos ou estudar algo relacionado a roteiros de livros ou história, e tomar um café.
        </li>
        <li>
          Fato curioso: Em algum pais que eu não me lembro o nome existe uma palavra pra cada situação inesplicavel.
        </li>
      </ul>
      <h1 >HABILIDADES</h1>
      <table className={styles.habilidades}>
        <tr>
          <td valign="top" width="33%">
            <div >
              <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                <img src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" />
              </a>
              <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                <img src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" />
              </a>
              <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer">
                <img src="https://profilinator.rishav.dev/skills-assets/csharp-original.svg" alt="C#" />
              </a>
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                <img src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" />
              </a>
              <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer">
                <img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" />
              </a>
              <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" />
              </a>
              <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
                <img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" />
              </a>
            </div>
          </td>
        </tr>
      </table>
      <h1 >Conecte comigo</h1>
      <div className={styles.socialRedes}>
        <a href="https://github.com/joashneves" target="_blank" rel="noopener noreferrer">
          <img className={styles.socialRedesImg} src="https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white" alt="github" style={{ marginBottom: "5px" }} />
        </a>
        <a href="https://twitter.com/OYoyatsu" target="_blank" rel="noopener noreferrer">
          <img className={styles.socialRedesImg} src="https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white" alt="twitter" style={{ marginBottom: "5px" }} />
        </a>
        <a href="https://www.linkedin.com/in/joas-neves-b8340a290/" target="_blank" rel="noopener noreferrer">
          <img className={styles.socialRedesImg} src="https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" style={{ marginBottom: "5px" }} />
        </a>
        <a href="https://www.instagram.com/joashneves/" target="_blank" rel="noopener noreferrer">
          <img className={styles.socialRedesImg} src="https://img.shields.io/badge/instagram-%23000000.svg?&style=for-the-badge&logo=instagram&logoColor=white" alt="instagram" style={{ marginBottom: "5px" }} />
        </a>
        <a href="https://www.youtube.com/@jjoash_" target="_blank" rel="noopener noreferrer">
          <img className={styles.socialRedesImg} src="https://img.shields.io/badge/youtube-%23EE4831.svg?&style=for-the-badge&logo=youtube&logoColor=white" alt="youtube" style={{ marginBottom: "5px" }} />
        </a>
      </div>
      
    </article>
  );
};

export default PerfilInfo;
