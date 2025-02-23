import { configureStore } from '@reduxjs/toolkit'

import stockReducer from "../src/Slice/stockSlice"

export const store = configureStore({
  reducer: {
    stock: stockReducer
  },
})