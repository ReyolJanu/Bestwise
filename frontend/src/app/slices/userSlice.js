import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:null,
        role:null,
        isAuthenticated: false,
    },
    reducers: {
        userLogin(state, action) {
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                role: action.payload.role,
            }
        },
        userLogout(state, action) {
            return {
                isAuthenticated: false,
                user: null,
                role: null
            }
        },
    }
});


export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;