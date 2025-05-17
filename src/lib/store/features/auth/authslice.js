import appwriteService from "@/appwrite/appwrite_config";
import { createSlice } from "@reduxjs/toolkit";


export const authslice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        user: {
            id: '',
            name: '',
            email: '',
            emailVerification: false,
        }
    },
    reducers: {
        // Combine login & setting user data into one action
        loginUser: (state, action) => {
            if (action.payload && action.payload.user) {
                const { id, name, email, emailVerification } = action.payload.user;
                // Set the state properties
                state.isLoggedIn = true;
                state.user.name = name;
                state.user.id = id;
                state.user.email = email;
                state.user.emailVerification = emailVerification;
            } else {
                console.error("User data is missing in payload:", action.payload);
            }
        },

        // Combine logout & clearing user data into one action
        logoutUser: (state, action) => {
            state.isLoggedIn = false;
            state.user = {             // Reset user properties
                id: null,
                name: '',
                email: '',
                emailVerification: false,
            };
        },

    }
})

export const { loginUser, logoutUser } = authslice.actions
export default authslice.reducer;
