import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  template: "",
  template2: "",
  template3: "",
  templateEdit: true,
  templateEdit2: true,
  templateEdit3: true,
  dynamictexttemplate: [],
  dynamictexttemplate2: [],
  dynamictexttemplate3: [],


};

export const templateSlice = createSlice({
  name: "smsTemplateValues",
  initialState,
  reducers: {
    setTemplate: (state, action) => {
      state.template = action.payload;
    },
    setTemplate2: (state, action) => {
      state.template2 = action.payload;
    },
    setTemplate3: (state, action) => {
      state.template3 = action.payload;
    },
    setEditable: (state, action) => {
      const index = action.payload.index;

      if (index === 1) {
        state.templateEdit = false;
        state.templateEdit2 = true;
        state.templateEdit3 = true;
      }

      if (index === 2) {
        state.templateEdit = true;
        state.templateEdit2 = false;
        state.templateEdit3 = true;
      }

      if (index === 3) {
        state.templateEdit = true;
        state.templateEdit2 = true;
        state.templateEdit3 = false;
      }
    },
    setDisableEdit: (state, action) => {
      state.templateEdit = true;
      state.templateEdit2 = true;
      state.templateEdit3 = true;
    },
    setDynamicTextTemplate: (state, action) => {
      state.dynamictexttemplate.push(state.dynamictexttemplate.length + 1)
    },
    setDynamicTextTemplate2: (state, action) => {
      state.dynamictexttemplate2.push(state.dynamictexttemplate2.length + 1)
    },
    setDynamicTextTemplate3: (state, action) => {
      state.dynamictexttemplate3.push(state.dynamictexttemplate3.length + 1)
    },
  },
});

// Export actions and reducer
export const {
  setTemplate,
  setTemplate2,
  setTemplate3,
  setEditable,
  setDisableEdit,
} = templateSlice.actions;
export default templateSlice.reducer;
