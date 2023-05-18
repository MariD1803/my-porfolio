import React, { useEffect, useRef } from 'react'
import { langSources } from '../../app/data';
import styled from 'styled-components';

const StyledButtonGrey =styled.button `

background: #fff;
  background: rgb(143 143 143);
    color: #484848;
    border: 2px solid #484848;
    padding: 6px;
    height: 30px;
    width: 136px;
    border-radius: 3px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    display: inline-block;
    text-align: center;
    font-weight: 600;
    cursor: auto;
    box-shadow: rgba(0, 0, 0, 0.35) 8px 5px 10px -1px;
    font-size: 14px;
    @media (min-width: 1400px) {
    font-size: 18px;    
    height: 35px;
    width: 136px;
  }

`
const StyledButtonPink = styled.button `
   background: #fff;
    color:  rgb(236, 148, 210);
    border: 2px solid  rgb(236, 148, 210);
    padding: 6px 6px;
    height: 30px;
    width: 136px;
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
    height: 35px;
    width: 136px;
  }
`
const StyledButtonBlue = styled.button `
   background: #fff;
    color: #4741d7;
    border: 2px solid #4741d7;
    padding: 6px 6px;
    height: 30px;
    width: 136px;
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
  background:  #4741d7;
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
    height: 35px;
    width: 136px;
  }
`
var lang = localStorage.getItem("lang")


const Education = () => {

  
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
    <div className='div-container-projects-and-education'>
      <div className='div-container-card-education'>
        <div className='div-education'>
          <h2 id='education-titulo-1'></h2>
          <div className='div-institucion'> 
            <p id='education-institution'> </p> 
            <h4>NUCBA</h4>
          </div>

          
          <div  id='education-description-1' className='projects-description education-description'></div>
          <div className='container-buttons'>
            <a href="https://app.eduflow.com/certificate/b19a015f-03ed-476c-9a8f-fce864c57338" ><StyledButtonPink id='education-button-1'></StyledButtonPink></a>
            
         
          </div>
          <div  id='education-description-1.1' className='projects-description education-description'></div>
          <div className='container-buttons'><StyledButtonGrey id='button-inprogress'></StyledButtonGrey></div>
          <div>

          </div>
        </div>
      </div>



      <div className='div-container-card-education'>
      <div className='div-education'>
          <h2 id='education-titulo-2'></h2>
          <div className='div-institucion'> 
            <p id='education-institution-2'> </p> 
            <h4>Educación IT</h4>
          </div>

          
          <div  id='education-description-2' className='projects-description education-description'></div>
          <div className='container-buttons-2'>
            <a href="https://api.educacionit.com/pdf/certificados/Mariangel-Diaz-583068/51104" _blank ><StyledButtonBlue id='education-button'></StyledButtonBlue></a>           
         
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Education