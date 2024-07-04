// HomePage.js
import Hud from "../molecules/Hud/Hud";
import Home from "../molecules/Home/Home";
import Cabecalho from "../templates/cabecalho/Cabecalho";
import translations from "../../../config/content.json"; // ajuste o caminho conforme necessário

const HomePage = () => {
  const { "pt-br": { "titulo-home": tituloHome,
     "primeira-linha-home": primeiraLinhaHome,
     "segunda-linha-home": segundaLinhaHome,
     "terceira-linha-home": terceiraLinhaHome,
    "quarta-linha-home": quartaLinhaHome,
    "quinta-linha-home": quintaLinhaHome,
    "sexta-linha-home": sextaLinhaHome } } = translations;

  return (
    <>
      <Hud inicio='Inicio' posts='Posts' project='Portifolio' contato='Contato' />
      <Home titulo={tituloHome} 
      primeiralinha={primeiraLinhaHome} 
      segundalinha={segundaLinhaHome} 
      terceiralinha={terceiraLinhaHome} 
      quartalinha={quartaLinhaHome}
      quintalinha={quintaLinhaHome}
      sextalinha={sextaLinhaHome}/>
      <Cabecalho />
    </>
  );
}

export default HomePage;
