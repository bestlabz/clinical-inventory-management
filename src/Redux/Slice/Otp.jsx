import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    otpValue: null
    // {
    //     name: "Mohamed Thawfeek"
    // }
};

export const userSlice = createSlice({
    name: 'otpValues',
    initialState,
    reducers: {
        setOTP: (state, action) => {
            state.otpValue =  action.payload
        },
        clearOTP: (state) => {
            state.otpValue = null
        },
    },
});

// Export actions and reducer
export const { setOTP, clearOTP } = userSlice.actions;
export default userSlice.reducer;
