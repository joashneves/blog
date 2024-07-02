import Hud from "../molecules/Hud/Hud";
import Cabecalho from "../templates/cabecalho/Cabecalho";

const ContatoPage = () =>{
    return(
        <>
        <Hud inicio='Inicio' posts='Posts' project='Project' contato='Contato'/>
        <div><p>Contato</p></div>
        <Cabecalho/>
        </>
    )
}

export default ContatoPage;