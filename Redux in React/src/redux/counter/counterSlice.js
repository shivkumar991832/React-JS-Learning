// these all imported from React Redux ToolKit


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
    // these are function that can manupulate state
  name: 'counter',//state name is counter
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    // creating new function
    multiply: (state)=>{
       state.value *= 10
    },
    squarebtn: (state)=>{
      state.value**=3
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount , multiply, squarebtn} = counterSlice.actions


// by default rahega
export default counterSlice.reducer