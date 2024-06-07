import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sidebarStatus: true
   
};

export const sidebarSlice = createSlice({
    name: 'sidebarValues',
    initialState,
    reducers: {
        setSidebar: (state, action) => {
            state.sidebarStatus =  state.sidebarStatus ? false : true;
        },
       
    },
});

// Export actions and reducer
export const { setSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
