import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Projects from "../pages/projects";
import Education from "../pages/education";
import Skills from "../pages/skills";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Header from "../Navbar/Header.jsx";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";







const Rutas = ({langSources}) => {

  var lang = localStorage.getItem("lang")
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      chooseLanguage(lang);
    };
  }, []);

  const saveLocalStorage = langSelected => {
    localStorage.setItem('lang', langSelected);
  };

  const chooseLanguage = (langSelected) => {
    saveLocalStorage(langSelected);
    for (let source of langSources) {
      let elem = document.getElementById(source.id);
      if (elem == null) {
        continue;
      }
      elem.innerHTML = source.langValue[langSelected];
    }
  };

  const setLanguage = (e) => {
    let langSelected = e.currentTarget.getAttribute("btn-lang");
    chooseLanguage(langSelected);
    document.querySelector(".chakra-collapse").style.display = "none"
    window.location.reload();
    
  };

  const showLanguage = () => {
      let langSelect = localStorage.getItem("lang") || "es";
      if (langSelect === "es") {
        document.getElementById("lang-es").style.display = "none"
        document.getElementById("lang-en").style.display = "flex"
        
      }
      if (langSelect === "en") {
        document.getElementById("lang-es").style.display = "flex"
        document.getElementById("lang-en").style.display = "none"
      }
    
  };

  
  const [bc, setBc] = useState(false);


  const backgroundDark = () => {
    document.body.className = "html-dark";
    let links = document.querySelectorAll(".navbar-list");
    for (let link of links) {
      link.style.color = "white";
    }
  };


  const backgroundLigth = () => {
    document.body.className = "html-ligth";
    let links = document.querySelectorAll(".navbar-list");
    for (let link of links) {
      link.style.color = "black";
    }
    
  };

  const init = () => {
    document.addEventListener("DOMContentLoaded", backgroundLigth());
    document.addEventListener("DOMContentLoaded", chooseLanguage(lang));
  };

  init();


  return (
    <div>
      <Router>

        <div className="navbar-division">
          <Header bc={bc}></Header>
          <div className="container-filtros-page">
            <div className="content-filtros">
              <div className="direction-row">
                <button
                  className="html-ligth btn-bc" 
                  onClick={() =>{ backgroundLigth(); setBc(false)}}
                >
                  <CiLight />
                </button>
                <button className="html-dark btn-bc" onClick={() => {backgroundDark();}}>
                  <MdDarkMode />
                </button>
              </div>
              <div className="space-between"></div>
            </div>


            <div className="position-absolute-lang ">
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton onClick={ showLanguage } cursor={"pointer"} id="accordion_button">
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        id="select-lang"
                      ></Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <button btn-lang="en" id="lang-en" onClick={setLanguage}>
                      EN
                    </button>
                    <button btn-lang="es" id="lang-es" onClick={setLanguage}>
                      ES
                    </button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <Routes>
          <Route
            path="/" lang={lang}
            element={<Home />}
          ></Route>
          <Route path="projects" lang={lang}  element={<Projects />}></Route>
          <Route path="education" lang={lang}  element={<Education />}></Route>
          <Route path="skills"  lang={lang}  element={<Skills />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Rutas;
