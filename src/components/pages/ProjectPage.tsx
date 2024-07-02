import Hud from "../molecules/Hud/Hud";
import Cabecalho from "../templates/cabecalho/Cabecalho";


const ProjectPage = () =>{
    return(
        <>
        <Hud inicio='Inicio' posts='Posts' project='Project' contato='Contato'/><div><p>Project</p></div>
        <Cabecalho/>
        </>
    )
}

export default ProjectPage;