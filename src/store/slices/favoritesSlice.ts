import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favoriteEvents: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const eventExists = state.favoriteEvents.some((event) => event.id === action.payload.id)
      if (!eventExists) {
        state.favoriteEvents.push(action.payload)
      }
    },
    removeFavorite: (state, action) => {
      state.favoriteEvents = state.favoriteEvents.filter((event) => event.id !== action.payload.id)
    },
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
