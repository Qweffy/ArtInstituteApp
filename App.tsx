import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import ErrorBoundary from 'react-native-error-boundary'
import { store } from './src/store/store'
import Home from './src/pages/Home/Home'
import EventDetailComponent from './src/pages/ExhibitionDetail/EventDetail'
import Favorites from './src/pages/Favorites/Favorites'
import { Text, View } from 'react-native'

const HomeStack = createStackNavigator()
const FavoritesStack = createStackNavigator()
const Tab = createBottomTabNavigator()

const ErrorFallback = ({ error }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 18, marginBottom: 10 }}>Oops, something went wrong!</Text>
    <Text style={{ color: 'red' }}>{error.toString()}</Text>
  </View>
)

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="EventDetail" component={EventDetailComponent} />
  </HomeStack.Navigator>
)

const FavoritesStackScreen = () => (
  <FavoritesStack.Navigator>
    <FavoritesStack.Screen name="Favorites" component={Favorites} />
  </FavoritesStack.Navigator>
)

const App = () => {
  const [isErrorComponentVisible, setIsErrorComponentVisible] = React.useState(false)
  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  )
}

export default App
