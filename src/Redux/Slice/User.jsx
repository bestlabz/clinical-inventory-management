import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userDetails: null
    // {
    //     name: "Roti Ghar"
    // }
};

export const userSlice = createSlice({
    name: 'userValues',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userDetails = action.payload;
        },
        clearUser: (state) => {
            state.userDetails = null
        },
    },
});

// Export actions and reducer
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
