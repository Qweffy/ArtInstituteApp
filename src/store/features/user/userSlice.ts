import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  name: string | null
  username: string | null
  email: string
}

const initialState: UserState = {
  name: null,
  username: null,
  email: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<{ name: string; username: string; email: string }>) => {
      const { name, username, email } = action.payload
      state.name = name
      state.username = username
      state.email = email
    },
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
  },
})

export const { addUser, changeEmail } = userSlice.actions
export default userSlice.reducer
