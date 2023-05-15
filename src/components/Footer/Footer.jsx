import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div  `
    width: 100%;
    height: 45px;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

`

const Footer = () => {
  return (
    <StyledDiv className='navbar-list'>
        <div>Contactame</div>
        <div>Sigueme</div>
    </StyledDiv>
  )
}

export default Footer