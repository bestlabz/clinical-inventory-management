import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userDetails: null,
  balance_due: null,

    
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
        addBalanceDue: (state, action) => {
            state.balance_due = action.payload;
          },
    },
});

// Export actions and reducer
export const { setUser, clearUser, setToken, addBalanceDue } = userSlice.actions;
export default userSlice.reducer;
