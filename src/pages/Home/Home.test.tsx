import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Home from './Home'
import { addUser, changeEmail } from '../../store/features/user/userSlice'

const mockStore = configureStore([])

describe('Home Screen', () => {
  let store: any

  beforeEach(() => {
    store = mockStore({
      user: {
        name: null,
        username: null,
        email: '',
      },
    })
  })

  it('should update text fields correctly', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    )

    const nameInput = getByPlaceholderText('Name')
    fireEvent.changeText(nameInput, 'John Doe')

    const usernameInput = getByPlaceholderText('Username')
    fireEvent.changeText(usernameInput, 'johndoe')

    const emailInput = getByPlaceholderText('Email')
    fireEvent.changeText(emailInput, 'johndoe@example.com')

    expect(nameInput.props.value).toBe('John Doe')
    expect(usernameInput.props.value).toBe('johndoe')
    expect(emailInput.props.value).toBe('johndoe@example.com')
  })

  it('should dispatch actions on button press', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    )

    fireEvent.press(getByText('Add User'))
    expect(store.getActions()).toContainEqual(
      addUser({
        name: '',
        username: '',
        email: '',
      }),
    )

    fireEvent.press(getByText('Change Email'))
    expect(store.getActions()).toContainEqual(changeEmail(''))
  })
})
