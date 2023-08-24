import {createSlice} from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, {payload}) => {
      state.loading = payload;
    },
  },
});

export const {setLoading} = appSlice.actions;

export default appSlice.reducer;
