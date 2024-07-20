import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Notifiacation: false   
};

export const notificationSlice = createSlice({
    name: 'notificationValues',
    initialState,
    reducers: {
        setVisible: (state, action) => {
            state.Notifiacation =  state.Notifiacation ? false : true;
        },
        
    },
});

// Export actions and reducer
export const { setVisible } = notificationSlice.actions;
export default notificationSlice.reducer;
