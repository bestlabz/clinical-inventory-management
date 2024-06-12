import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    newuser: null
   
};

export const userSlice = createSlice({
    name: 'userValues',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.newuser = action.payload;
        },
        clearUserDetails: (state) => {
            state.newuser = null
        },
    },
});

// Export actions and reducer
export const { setUserDetails, clearUserDetails } = userSlice.actions;
export default userSlice.reducer;
