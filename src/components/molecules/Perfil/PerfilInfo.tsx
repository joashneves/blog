import React, { useEffect } from "react";
import styles from './PerfilInfo.module.css'

import fotoPerfil0 from '../../../assets/perfil_joas_0.jpeg'

import gamemaker from '../../../assets/light-gamemaker2-svgrepo-com.svg'

const PerfilInfo = () => {

    return (
        <article className={styles.perfilInfo}>
            <h1 >SOBRE MIM</h1>
            <div className={styles.sobreMim}>
                <div><img className={styles.sobreMimFoto} src={fotoPerfil0} alt="minha foto" /></div>
                <div><ul>
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
                </ul></div>
            </div>
            <h1 >HABILIDADES</h1>
            <table className={styles.habilidades}>
                <tr>
                    <td valign="top" width="33%">
                        <div >
                            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                                <img className={styles.habilidadesImg} src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" />
                            </a>
                            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                                <img className={styles.habilidadesImg} src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" />
                            </a>
                            <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer">
                                <img className={styles.habilidadesImg} src="https://profilinator.rishav.dev/skills-assets/csharp-original.svg" alt="C#" />
                            </a>
                            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                <img className={styles.habilidadesImg} src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" />
                            </a>
                            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer">
                                <img className={styles.habilidadesImg} src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" />
                            </a>
                            <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                                <img className={styles.habilidadesImg} src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" />
                            </a>
                            <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
                                <img className={styles.habilidadesImg} src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" />
                            </a>
                            <a href="https://gamemaker.io/pt-BR" target="_blank" rel="noopener noreferrer">
                                <img className={styles.habilidadesImg} src='https://img.icons8.com/?size=100&id=34299&format=png&color=000000' alt="gamemaker2" />
                            </a>
                        </div>
                    </td>
                </tr>
            </table>
            

        </article>
    );
};

export default PerfilInfo;
