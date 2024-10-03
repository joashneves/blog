
import json from '../../../../post/projetos/projetos.json';
import ProjectTemplate from '../../templates/ProjectoTemplate/ProjectoTemplate';

import styles from './ProjectList.module.css';

const ProjectList = () =>{
    return(<>
    <article id="Portifolio" className={styles.ProjectListSession}>
    <h1 className={styles.tituloProject}>Projetos</h1>
    <div className={styles.exibir}>
                {json.map((data, index) => (
                    <ProjectTemplate
                        key={index} // Adicione uma chave única para cada item
                        titulo={data.titulo}
                        descricao={data.descricao}
                        link={data.link}
                        data={data.data}
                    />
                ))}
            </div>
            </article>
            </>)
}

export default ProjectList;