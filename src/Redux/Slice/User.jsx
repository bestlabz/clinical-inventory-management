import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userDetails: 
    {
        name: "Mohamed Thawfeek"
    }
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
