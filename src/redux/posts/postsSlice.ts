import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../actions/api';


export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    const response = await api.getPosts()
    return response.results
  }
)


export interface PostInterface {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

interface PostsState {
  postsList: Array<PostInterface>
}

const initialState: PostsState = {
  postsList: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {

    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.postsList = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
/* export const { getPosts } = postsSlice.actions; */

export default postsSlice.reducer;