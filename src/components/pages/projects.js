import React, { useEffect, useRef } from 'react'
import { langSources } from '../../app/data';
import { SiJavascript, SiCsswizardry, SiStyledcomponents} from 'react-icons/si'
import { TiHtml5} from 'react-icons/ti'
import { FaReact} from 'react-icons/fa'
import styled from 'styled-components';


const StyledButtonLeft = styled.button `
    background: #fff;
    color: #4741d7;
    border: 2px solid #4741d7;
    padding: 6px 6px;
    height: 30px;
    width: 80px;
    border-radius: 3px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    display: inline-block;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 8px 5px 10px -1px;
    font-size: 14px;
  :hover {
    color: #fff;
  }

  :after {
    content: "";
  background: #4741d7; /* color de fondo hover */
  position: absolute;
  z-index: -1;
  padding: 16px 20px;
  display: block;
  top: 0;
  bottom: 0;
  left: -100%;
  right: 100%;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  }


  :hover::after {
    left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  }

  @media (min-width: 1400px) {
    font-size: 18px;
    height: 40px;
    width: 90px;
  }

  @media (min-width: 425px) {
    font-size: 12px;
    height: 28px;
    width: 70px;
  }

`
const StyledButtonRight = styled.button `
   background: #fff;
    color:  rgb(236, 148, 210);
    border: 2px solid  rgb(236, 148, 210);
    padding: 6px 6px;
    height: 30px;
    width: 100px;
    border-radius: 3px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    display: inline-block;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    box-shadow: rgba(0, 0, 0, 0.35) 8px 5px 10px -1px;
  :hover {
    color: #fff;
  }

  :after {
    content: "";
  background:  rgb(236, 148, 210);
  position: absolute;
  z-index: -1;
  padding: 16px 20px;
  display: block;
  top: 0;
  bottom: 0;
  left: -100%;
  right: 100%;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  }


  :hover::after {
    left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  }

  @media (min-width: 1400px) {
    font-size: 18px;
    height: 40px;
    width: 120px;
  }


  @media (min-width: 425px) {
    font-size: 12px;
    height: 28px;
    width: 80px;
  }

`

const DivIconos = styled.div `
      font-size: 24px;
    gap: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2% 0;

  @media (min-width: 1400px) {
    font-size: 28px;
  }
`


const Projects = () => {

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
    <div className='div-container-projects-and-education'>
      <div className='div-container-card'>
        <div className='imagen-projects'><div  id='imagen-dc'> </div></div>
        <div className='div-projects-rigth'>
          <h2>Dulce Cerecita</h2>
          <div  id='projects-description-1' className='projects-description'></div>
          <DivIconos>
            <SiJavascript/>
            <TiHtml5/>            
            <SiCsswizardry/>
          </DivIconos>
          <div className='container-buttons'>
            <a href="" ><StyledButtonLeft>Deploy</StyledButtonLeft></a>
            <a href="#" ><StyledButtonRight id='projects-button'></StyledButtonRight></a>
         
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className='div-container-card'>
      <div className='imagen-projects'><div  id='imagen-hs'> </div></div>
      <div className='div-projects-rigth'>
          <h2>¡HEY! Store</h2>
          <div  id='projects-description-2' className='projects-description'></div>
          <DivIconos>
            <FaReact/>
            <TiHtml5/>            
            <SiStyledcomponents/>
          </DivIconos>
          <div className='container-buttons'>
            <a href="#" ><StyledButtonLeft>Deploy</StyledButtonLeft></a>
            <a href="#" ><StyledButtonRight id='projects-button-2'></StyledButtonRight></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects