import React, { useEffect, useRef } from 'react'
import { langSources } from "../../app/data";
import { FaPython, FaCss3Alt, FaReact,FaNodeJs, FaGitAlt, FaNpm} from 'react-icons/fa'
import { SiJavascript, SiChakraui, SiMui, SiStyledcomponents, SiBootstrap,SiCanva, SiSelenium,SiMysql,SiApache} from 'react-icons/si'
import { AiFillHtml5,AiFillGithub} from 'react-icons/ai'
import { FiFigma} from 'react-icons/fi'
import { TbSql} from 'react-icons/tb'
import styled from 'styled-components'

const DivPrincipal = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;    
    padding: 2rem 0 4rem 0; 

    @media (min-width: 1400px) {
      padding: 6rem 0;    
    }

`
const DivSecond = styled.div `
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const ContainerIcons = styled.div `
   display: flex;
    flex-direction: row;
    align-items: center;
    gap: 22px;
    
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const ContainerPink = styled.div `
  display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    font-size: 20px;
    background: pink;
    color: black !important;
    width: max-content;
    padding: 0 0.5rem;
    border-radius: 10px;
    font-weight: 600;
    margin: 0;
    box-shadow:  rgb(214, 137, 137) 15px 3px 0px 0px;

    @media (min-width: 1400px) {
      font-size: 22px;
    }
    @media (max-width: 425px) {
      font-size: 18px;
    }

`
const ContainerBlue = styled.div `
  display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    font-size: 20px;
    background: #c0c9ff;
    color: black !important;
    width: max-content;
    padding: 0 0.5rem;
    border-radius: 10px;
    font-weight: 600;
    margin: 0;
    box-shadow:  #4741d7 15px 3px 0px 0px;

    @media (min-width: 1400px) {
      font-size: 22px;
    }
    
    @media (max-width: 425px) {
      font-size: 18px;
    }

`


var lang = localStorage.getItem("lang") != undefined ? localStorage.getItem("lang") : "es" 


const Skills = () => {
    
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      chooseLanguage(lang);
    };
  }, []);
  const chooseLanguage = (langSelected) => {
    console.log(lang)
    let _ = localStorage.setItem("lang", langSelected);
    for (let source of langSources) {
      let elem = document.getElementById(source.id);
      if (elem == null) {
        continue;
      }
      elem.innerHTML = source.langValue[langSelected];
    }
  };

  return (
   <DivPrincipal >
     <DivSecond>
      <h2 id='skills-titulo'></h2>
      <div className='div-container-skills'>
        <h3 id='lenguajes-prog'></h3>
        <ContainerIcons>
          <ContainerPink>
          <SiJavascript></SiJavascript>
          <p className='p-sinmargin'>JavaScript</p>
          </ContainerPink>
          <ContainerBlue>
          <FaPython></FaPython>
          <p className='p-sinmargin'>Python</p>
          </ContainerBlue>
        </ContainerIcons>
      </div>
      <div className='div-container-skills'>
        <h3> Front-end </h3>
        <ContainerIcons>
          <ContainerPink>
            <AiFillHtml5></AiFillHtml5>
            <p className='p-sinmargin'>HTML</p>
          </ContainerPink>
          <ContainerBlue>
            <FaCss3Alt></FaCss3Alt>
            <p className='p-sinmargin'>CSS</p>
          </ContainerBlue>
          <ContainerPink>
            <FaReact></FaReact>
            <p className='p-sinmargin'>React</p>
          </ContainerPink>
          <ContainerBlue>
            <SiMui></SiMui>
            <p className='p-sinmargin'>MaterialUI</p>
          </ContainerBlue>
          <ContainerPink>
            <SiChakraui></SiChakraui>
            <p className='p-sinmargin'>Chakra UI</p>
          </ContainerPink>
          <ContainerBlue>
            <SiStyledcomponents></SiStyledcomponents>
            <p className='p-sinmargin'>StyledComponents</p>
          </ContainerBlue>
          <ContainerPink>
            <SiBootstrap></SiBootstrap>
            <p className='p-sinmargin'>Bootstrap</p>
          </ContainerPink>
        </ContainerIcons>
      </div>
      <div className='div-container-skills'>
        <h3 id='design'></h3>
        <ContainerIcons>
          <ContainerPink>
          <SiCanva></SiCanva>
          <p className='p-sinmargin'>Canva</p>
          </ContainerPink>
          <ContainerBlue>
          <FiFigma></FiFigma>
          <p className='p-sinmargin'>Figma</p>
          </ContainerBlue>
        </ContainerIcons>
      </div>
      <div className='div-container-skills'>
        <h3 id='qa'></h3>
        <ContainerIcons>
          <ContainerPink>
          <SiSelenium></SiSelenium>
          <p className='p-sinmargin'>Selenium</p>
          </ContainerPink>
          <ContainerBlue>
          <SiApache></SiApache>
          <p className='p-sinmargin'>JMeter</p>
          </ContainerBlue>
          <ContainerPink>
          <TbSql></TbSql>
          <p className='p-sinmargin'>SQL</p>
          </ContainerPink>
          <ContainerBlue>
          <SiMysql></SiMysql>
          <p className='p-sinmargin'>MySQL</p>
          </ContainerBlue>
        </ContainerIcons>
      </div>

      <div className='div-container-skills'>
        <h3 id='other-tools'></h3>
        <ContainerIcons>
          <ContainerPink>
          <AiFillGithub></AiFillGithub>
          <p className='p-sinmargin'>GitHub</p>
          </ContainerPink>
          <ContainerBlue>
          <FaNodeJs></FaNodeJs>
          <p className='p-sinmargin'>Node</p>
          </ContainerBlue>
          <ContainerPink>
          <FaGitAlt></FaGitAlt>
          <p className='p-sinmargin'>Git</p>
          </ContainerPink>
          <ContainerBlue>
          <FaNpm></FaNpm>
          <p className='p-sinmargin'>Npm</p>
          </ContainerBlue>
        </ContainerIcons>
      </div>

    </DivSecond>
   </DivPrincipal>
  )
}

export default Skills