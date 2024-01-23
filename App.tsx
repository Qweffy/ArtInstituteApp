import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'

import { store } from './src/store/store'
import Home from './src/pages/Home/Home'
import EventDetailComponent from './src/pages/ExhibitionDetail/EventDetail'
import Favorites from './src/pages/Favorites/Favorites'

const HomeStack = createStackNavigator()
const FavoritesStack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="EventDetail" component={EventDetailComponent} />
  </HomeStack.Navigator>
)

const FavoritesStackScreen = () => (
  <FavoritesStack.Navigator screenOptions={{ headerShown: false }}>
    <FavoritesStack.Screen name="Favorites" component={Favorites} />
  </FavoritesStack.Navigator>
)

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
)

export default App
