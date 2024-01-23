import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import favoritesReducer from './slices/favoritesSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(
      // eslint-disable-next-line global-require
      __DEV__ ? require('redux-flipper').default() : [],
    ),
})
