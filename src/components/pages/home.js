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
              <h2 id="home-greetings"></h2>
              <h2>Mariangel Diaz</h2>
            </div>
            <h2 id="home-title"></h2>
            <span id="home-description"></span>
          </div>
          <div className="div-container-information cover-img"></div>
        
      </div>

    </div>
  );
};

export default Home;
