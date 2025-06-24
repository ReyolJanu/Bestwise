import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    role: null,
    isAuthenticated: false,
  },
  reducers: {
    userLogin(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    updateUserProfile(state, action) {
      if (action.payload.user) state.user = action.payload.user;
      if (action.payload.role) state.role = action.payload.role;
    },
    userLogout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
    },
  },
});

export const { userLogin, userLogout, updateUserProfile } = userSlice.actions;
export default userSlice.reducer;
