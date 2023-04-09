import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: "1",
        titulo: 'Ejemplo',
        descripcion:'Descripcion de mi tarea', 
    }
]

export const formSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
      addTask: (state = initialState, action) => {
        state.push(action.payload);
      },
      editTask: (state, action) => {
        console.log(state, action )
      },
      deleteTask: (state, action) => {
        const foundTask = state.find((task) => task.id === action.payload);
        if (foundTask) {
          state.splice(state.indexOf(foundTask), 1);
        }
      },
    },
  });
  
export const { addTask, editTask, deleteTask } = formSlice.actions;

export default formSlice.reducer