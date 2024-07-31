import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Notifiacation: false,
    NotificationData: []
};

export const notificationSlice = createSlice({
    name: 'notificationValues',
    initialState,
    reducers: {
        setVisible: (state, action) => {
            state.Notifiacation =  state.Notifiacation ? false : true;
        },
        setNotification: (state, action) => { 
            state.NotificationData = action.payload
        },
        clearNotification: (state, action) => { 
            state.NotificationData = [];
        }
        
    },
});

// Export actions and reducer
export const { setVisible, setNotification, clearNotification} = notificationSlice.actions;
export default notificationSlice.reducer;
