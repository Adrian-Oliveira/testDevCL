import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',

  },
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {

      localStorage.setItem('userName', action.payload); 
      state.username = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUsername } = userSlice.actions;

export default userSlice.reducer;