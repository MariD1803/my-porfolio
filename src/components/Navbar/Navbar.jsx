import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${props => (props.bc ? "linear-gradient(to right, #252525 40%,  #535353  )" : "linear-gradient(to right,  #ffffff 40%, #a49e9e )")};
  position: fixed;
  top: 10vh;  
  z-index: 100;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 90vh;
  transition: right 0.3s linear;

  @media only screen and (min-width: 769px) {
    width: 90%;
    top: 8vh; 
    height: 45vh;
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: transparent;    
  align-items: flex-start;
  }

  a {
    padding: 0.5rem 0.8rem;
    color: grey;
    text-decoration: none;
  }
`;


const Navbar = ({ open, bc, handleClick }) => {


  return (
    <NavbarWrapper open={open} bc={bc}>
      <div className='container-navbar' id='navbar' >
        <Link to="/" className='navbar-list' onClick={handleClick}><div id="navbar-title-about">ACERCA DE MI</div></Link>
        <Link to="/projects" className='navbar-list'  onClick={handleClick}><div id='navbar-title-projects'>PROYECTOS</div></Link>
        <Link to="/education" className='navbar-list'  onClick={handleClick}><div id='navbar-title-education'>EDUCACION</div></Link>
        <Link to="/skills" className='navbar-list'  onClick={handleClick}><div id='navbar-title-skills' >HABILIDADES</div></Link>

       
        
    </div>
    </NavbarWrapper >
  )
}

export default Navbar