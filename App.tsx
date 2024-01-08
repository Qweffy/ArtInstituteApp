import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import Home from './src/pages/Home/Home'

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default App
