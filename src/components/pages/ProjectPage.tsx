import React from 'react';
import Hud from "../molecules/Hud/Hud";
import ProjectTemplate from "../templates/ProjectoTemplate/ProjectoTemplate";
import Cabecalho from "../templates/cabecalho/Cabecalho";

import styles from './ProjectPage.module.css';
import json from '../../../post/projetos/projetos.json';

const ProjectPage: React.FC = () => {
    return (
        <>
            <Hud inicio='Inicio' posts='Posts' project='Project' contato='Contato' />
            <div className={styles.exibir}>
                {json.map((data, index) => (
                    <ProjectTemplate
                        key={index} // Adicione uma chave única para cada item
                        link={data.link}
                        titulo={data.titulo}
                        descricao={data.descricao}
                        data={data.data}
                    />
                ))}
            </div>
            <Cabecalho />
        </>
    );
}

export default ProjectPage;
