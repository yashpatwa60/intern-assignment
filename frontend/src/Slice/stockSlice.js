import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allStocks: [],
  currentStock: {},
  currentStockId: null, 
}

export const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    setCurrentStock: (state, action) => {
      state.currentStock = action.payload
    },
    setAllStocks: (state, action) => {
      state.allStocks = [...action.payload]
    },
    setStockId: (state, action) => {
        state.currentStockId = action.payload
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentStock, setAllStocks, setStockId } = stockSlice.actions

export default stockSlice.reducer