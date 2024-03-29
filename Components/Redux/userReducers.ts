import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  name: string
  password:string
}

const initialState: CounterState = {
  name: "Maria de los Angeles",
  password:"",
}

export const UserReducers = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name = action.payload
    },
    setPassword: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.password = action.payload
      },
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.name += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setName, setPassword, incrementByAmount } = UserReducers.actions

export default UserReducers.reducer