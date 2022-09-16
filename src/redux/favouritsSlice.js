import { createSlice } from '@reduxjs/toolkit';

const favouritsSlice = createSlice({
  name: 'movie',
  initialState: {
    favourits: [

    ],

  },
  reducers:{

  addToFavourits: (state, action) => {
    state.favourits=[...state.favourits,action.payload]
// state.favourits.push(action.payload)
      },
  removeFavourit: (state, action) => {
    state.favourits = state.favourits.filter((data) => data.id !== action.payload.id);
  },

}
});
export const{
  getFav,
  addToFavourits,
  removeFavourit
}=favouritsSlice.actions
export default favouritsSlice.reducer;
