import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(
      // eslint-disable-next-line global-require
      __DEV__ ? require('redux-flipper').default() : [],
    ),
})
