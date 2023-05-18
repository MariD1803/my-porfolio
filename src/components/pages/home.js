import React, { useEffect, useRef } from "react";
import { langSources } from "../../app/data";
import Footer from "../Footer/Footer";

const Home = () => {
  const chooseLanguage = (langSelected) => {
    let _ = localStorage.setItem("lang",langSelected)
    for (let source of langSources){
      let elem = document.getElementById(source.id)
      if (elem == null){
        continue
      }
      elem.innerHTML = source.langValue[langSelected]
    }
  };

  const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;

        return () => {
            chooseLanguage(lang)
        };
    }, []);

  let lang = localStorage.getItem("lang") || "es"

  return (
    <div className="position">
      <div className="div-container">
       
          <div className="div-container-information ">
            <div className="div-title">
              <h2 id="home-greetings">Hola, soy</h2>
              <h2>Mariangel Diaz</h2>
            </div>
            <h2 id="home-title">Desarrolladora Front-End</h2>
            <span id="home-description">¡Bienvenido a mi portafolio! Soy una desarrolladora front-end apasionada por crear interfaces visualmente atractivas y fáciles de usar. Actualmente estoy ampliando mis habilidades estudiando back-end y Análisis de Base de Datos, y siempre estoy ansiosa por aplicar y ampliar mi conocimiento y experiencia a nuevos proyectos. Mis esfuerzos se enfoncan en producir constantemente código de alta calidad que no solo funcione bien, sino que también se vea genial. Estoy emocionada de compartir mis proyectos con ustedes y espero con ansias la oportunidad de trabajar juntos.</span>
          </div>
          <div className="div-container-information cover-img"></div>
        
      </div>

    </div>
  );
};

export default Home;
