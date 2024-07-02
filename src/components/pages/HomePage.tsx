import React from "react";
import Hud from "../molecules/Hud/Hud";
import Home from "../molecules/Home/Home";

const HomePage = () =>{
    return(
        <>
      <Hud inicio='Inicio' posts='Posts' project='Project' contato='Contato'/>
      <Home titulo='Ola Mundo!' primeiralinha='Então, se você está aqui, provavelmente já me conhece, mas para aqueles que não me conhecem, meu nome é apenas Joás, sim, ele não tem H; eu coloco para ter um charme.'/>
        </>
    )
}

export default HomePage;