import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button'
import { addUser, changeEmail } from '../../store/features/user/userSlice'

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
  console.log('test')

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          marginBottom: 10,
          width: '100%',
        }}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          marginBottom: 10,
          width: '100%',
        }}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          marginBottom: 10,
          width: '100%',
        }}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <Button label="Add User" onPress={handleSubmit} />
      <Button label="Change Email" onPress={handleChangeEmail} />
    </View>
  )
}

export default Home
