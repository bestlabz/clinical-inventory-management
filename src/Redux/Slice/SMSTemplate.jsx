import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  templates: [],
};

export const templateSlice = createSlice({
  name: "smsTemplateValues",
  initialState,
  reducers: {
    setTemplate: (state, action) => {
      const { index, value } = action.payload;
      if (index >= 0 && index < state.templates.length) {
        const updatedTemplates = state.templates.map((template, idx) => 
          idx === index ? { ...template, template: value } : template
        );
        state.templates = updatedTemplates;
      }
    },    
    setTemplates: (state, action) => {
      state.templates = action.payload;
    },
    clearSMStemplate: (state, action) => { 
      state.templates = [];
    }
  },
});

// Export actions and reducer
export const {
  setTemplate,
  setTemplates,
  clearSMStemplate
} = templateSlice.actions;
export default templateSlice.reducer;
