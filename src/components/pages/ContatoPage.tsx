import Hud from "../molecules/Hud/Hud";
import PerfilInfo from "../molecules/Perfil/PerfilInfo";
import EmailForm from "../organisms/email/EmailForm.tsx";
import Cabecalho from "../templates/cabecalho/Cabecalho";

const ContatoPage = () =>{
    return(
        <>
        <Hud inicio='Inicio' posts='Posts' project='Portifolio' contato='Contato'/>
        <div><PerfilInfo/>
        <EmailForm/>
        </div>
        <Cabecalho/>
        </>
    )
}

export default ContatoPage;