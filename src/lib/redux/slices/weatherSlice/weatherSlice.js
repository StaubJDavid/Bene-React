import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    capitals: [],
    savedCapitals: []
  },
  reducers: {
    setCapitals: (state, action) => {
      state.capitals = action.payload
    },
    addCapital: (state, action) => {
      state.savedCapitals = [
        ...state.savedCapitals,
        action.payload
      ]
    }
  }
})

export const { setCapitals, addCapital } = weatherSlice.actions

export default weatherSlice.reducer
