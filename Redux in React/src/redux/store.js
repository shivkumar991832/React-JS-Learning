// importing empty redux store from redux toolkit

import { configureStore } from '@reduxjs/toolkit'
// importing counterReducer from /counter/counterSlice
import counterReducer from "./counter/counterSlice"

export const store = configureStore({
    reducer: {
      counter: counterReducer,
  },
})