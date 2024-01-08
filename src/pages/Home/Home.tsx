import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button'
import { addUser, changeEmail } from '../../store/features/user/userSlice'
import styles from './Home.styles'
import { ScreenWrapper } from '../../components/ScreenWrapper/ScreenWrapper'

const Home = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(addUser({ name, username, email }))
  }

  const handleChangeEmail = () => {
    dispatch(changeEmail(email))
  }

  return (
    <ScreenWrapper>
      <TextInput style={styles.textInput} value={name} onChangeText={setName} placeholder="Name" />
      <TextInput style={styles.textInput} value={username} onChangeText={setUsername} placeholder="Username" />
      <TextInput style={styles.textInput} value={email} onChangeText={setEmail} placeholder="Email" />
      <Button label="Add User" onPress={handleSubmit} />
      <Button label="Change Email" onPress={handleChangeEmail} />
    </ScreenWrapper>
  )
}

export default Home
