import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../redux/Slice/formSlice'


const StyledDivContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 5rem 0;
`

const StyledFormInputs = styled.form `
      display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: flex-end;
    margin: 3rem;
    gap: 6px;
    border-radius: 3px;
    height: 60px;
    width: 465px;
    box-shadow: rgba(26, 25, 25, 0.753) 0px 4px 8px 0px;
    justify-content: center;
    padding-bottom: 0.5rem;
`
function handleClick(e) {
  e.preventDefault();

}

const StyledLabel = styled(FormLabel) `
  font-size: 18px;
  font-weight: 500;
`
const StyledInput = styled(Input) `
  height: 23px;
`

const Form = () => {
  const arrayToDo = []
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks);
  
  const[task, setTask] = useState ({
    titulo: '',
    descripcion: '',
  })

  const handleChange = e => {
    setTask ( {
      ...task, [e.target.name] : e.target.value
    })
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({...task, id: task.length + 1}))
  }


  return (
    <StyledDivContainer>
      <h2>Mi Agenda Para Hoy</h2>
      <StyledFormInputs onSubmit={handleSubmit} >
       <FormControl>
          <StyledLabel>Titulo</StyledLabel>
          <StyledInput placeholder='¿Que voy a realizar hoy?' name="titulo" onChange={handleChange}/>
        </FormControl>
        <FormControl>
          <StyledLabel>Descripción</StyledLabel>
          <StyledInput placeholder='¿Cómo lo voy a realizar?' name="descripcion" onChange={handleChange} />
        </FormControl> 
        <button className='btn' >Agregar</button>
      </StyledFormInputs>
      <div>
        <ul className='tasksContainer'>
          

        </ul>
        <button className={`btn ${
          arrayToDo.length 
          ? "btn"
          : "hidden"
        }`}>Borrar tareas</button>
      </div>
    </StyledDivContainer>
  )
}

export default Form