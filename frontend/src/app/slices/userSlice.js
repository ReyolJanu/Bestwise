import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:null,
        isLoggedIn: false,
    },
    reducers: {
        userLogin(state, action) {
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user
            }
        },
        userLogout(state, action) {
            return {
                isLoggedIn: false,
                user: null,
            }
        },
    }
});


export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;