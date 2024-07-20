import React, { useState } from "react";
import TemplateBox from "./TemplateBox";
import { useDispatch, useSelector } from "react-redux";
import {
  setEditable,
  setTemplate,
  setTemplate2,
  setTemplate3,
} from "../../Redux/Slice/SMSTemplate";

const Index = () => {
  const dispatch = useDispatch();
  const {
    template,
    template2,
    template3,
    templateEdit,
    templateEdit2,
    templateEdit3,
    dynamictexttemplate,
dynamictexttemplate2,
dynamictexttemplate3
  } = useSelector((state) => state.template);
  const [open, setopen] = useState(false);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);

  const handleChange = ({ index, value }) => {
    if (index === 1) {
      return dispatch(setTemplate(value));
    }
    if (index === 2) {
      return dispatch(setTemplate2(value));
    }
    if (index === 3) {
      return dispatch(setTemplate3(value));
    }
  };

  return (
    <div className="container">
      <div className="table-box">
      <h1 className="text-[22px] font-semibold pb-6">Templates</h1>

        <div className="template-container">
          <TemplateBox
            open={open}
            setOpen={setopen}
            title="SMS Template"
            edit={templateEdit}
            enableEdit={() => dispatch(setEditable({ index: 1 }))}
            onChange={handleChange}
            value={template}
            index={1}
            dynamicText={dynamictexttemplate}
          />
          <TemplateBox
            open={open2}
            setOpen={setopen2}
            title="Create Account SMS Template"
            edit={templateEdit2}
            enableEdit={() => dispatch(setEditable({ index: 2 }))}
            onChange={handleChange}
            value={template2}
            index={2}
            dynamicText={dynamictexttemplate2}

          />
          <TemplateBox
            open={open3}
            setOpen={setopen3}
            title="Patients Appoinment SMS Template"
            edit={templateEdit3}
            enableEdit={() => dispatch(setEditable({ index: 3 }))}
            onChange={handleChange}
            value={template3}
            index={3}
            dynamicText={dynamictexttemplate3}

          />
        </div>
      </div>
    </div>
  );
};

export default Index;
