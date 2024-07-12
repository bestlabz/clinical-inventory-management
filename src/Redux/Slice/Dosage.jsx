import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dosageForm: [],
    dosageStrength: []
    // {
    //     name: "Mohamed Thawfeek"
    // }
};

export const dosageSlice = createSlice({
    name: 'dosageValues',
    initialState,
    reducers: {
        setDosageForm: (state, action) => {
            state.dosageForm =  action.payload
        },
        setDosageStrength: (state, action) => {
            state.dosageStrength =  action.payload
        },
       
    },
});

// Export actions and reducer
export const { setDosageForm, setDosageStrength } = dosageSlice.actions;
export default dosageSlice.reducer;
