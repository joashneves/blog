import Hud from "../molecules/Hud/Hud";
import PerfilInfo from "../molecules/Perfil/PerfilInfo";
import Cabecalho from "../templates/cabecalho/Cabecalho";

const ContatoPage = () =>{
    return(
        <>
        <Hud inicio='Inicio' posts='Posts' project='Project' contato='Contato'/>
        <div><PerfilInfo/></div>
        <Cabecalho/>
        </>
    )
}

export default ContatoPage;