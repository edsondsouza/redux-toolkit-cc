// import { createSlice, nonoid } from "@reduxjs/toolkit";


// const initialState = { // initial state of the todo slice
//   todos: [{ 
//     id: 1,
//     text: "Hello, World!"
//   }]
// }

// export const todoSlice = createSlice({ // create a slice of the store
//   name: "todo",
//   initialState,
//   reducers: { // reducers are functions that modify the state
//     addTodo: (state, action) => {
//       const todo = { // create a new todo
//         id: nonoid(), // generate unique id, instead of nanaoid() you can also use Date.now()
//         text: action.payload // also can be written as action.payload.text
//       }
//       state.todos.push(todo); // add the new todo to the state
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload)
//     },
//   }
// });

// export const {addTodo, removeTodo} = todoSlice.actions; // export the actions

// export default todoSlice.reducer; // export the reducer so that the store can use it

import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer