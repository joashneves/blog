// HomePage.js
import React from "react";
import Hud from "../molecules/Hud/Hud";
import Home from "../molecules/Home/Home";
import Cabecalho from "../templates/cabecalho/Cabecalho";
import translations from "../../../config/content.json"; // ajuste o caminho conforme necessário

const HomePage = () => {
  const { "pt-br": { "titulo-home": tituloHome, "primeira-linha-home": primeiraLinhaHome, "segunda-linha-home": segundaLinhaHome } } = translations;

  return (
    <>
      <Hud inicio='Inicio' posts='Posts' project='Portifolio' contato='Contato' />
      <Home titulo={tituloHome} primeiralinha={primeiraLinhaHome} segundalinha={segundaLinhaHome} />
      <Cabecalho />
    </>
  );
}

export default HomePage;
