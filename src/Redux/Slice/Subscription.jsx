import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subscriptionCard: []
};

export const subscriptionSlice = createSlice({
    name: 'subscriptionValues',
    initialState,
    reducers: {
        AddSubscriptionCard: (state, action) => {
            state.subscriptionCard =  action.payload
        },
       
    },
});

// Export actions and reducer
export const { AddSubscriptionCard } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
