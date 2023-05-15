import React, { useState } from 'react'
import MenuButton from './MenuButton';
import Navbar from './Navbar';
import styled from 'styled-components';


const HeaderWrapper = styled.header`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  width: 77%;

  
  @media only screen and (max-width: 769px) {
    
    padding-inline-start: 0.5rem;
  }
  @media only screen and (max-width: 550px) {
    
    padding-inline-start: 0.8rem;
  }
`;


const Header = ({bc}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
  return (
    <HeaderWrapper>
    <Navbar open={open} bc={bc}  handleClick={handleClick}/>
    <MenuButton open={open} handleClick={handleClick} bc={bc} />
  </HeaderWrapper>
  )
}

export default Header