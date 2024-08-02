import React, { useEffect, useState } from "react";
import TemplateBox from "./TemplateBox";
import { useDispatch, useSelector } from "react-redux";
import { setTemplates, setTemplate } from "../../Redux/Slice/SMSTemplate";

import ApiRequest from "../../services/httpService";
import toast from "react-hot-toast";

const Index = () => {
  const dispatch = useDispatch();
  const { templates } = useSelector((state) => state.template);
  const [open, setopen] = useState(null);
  const [editable, setEditable] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const API = async () => {
      if (!loader) {
        try {
          const { success, SMSTypes } = await ApiRequest.get("/sms_type");

          if (success) {
            try {
              const { success, smstemplates } = await ApiRequest.get(
                "/sms_template"
              );

              if (success) {
                const Types = SMSTypes.map((item) => {
                  return {
                    type_id: item._id,
                    type_name: item.name,
                    template: smstemplates.filter(
                      (template) => template.smstypeId._id === item._id
                    )[0].body,
                    templateID: smstemplates.filter(
                      (template) => template.smstypeId._id === item._id
                    )[0]._id,
                  };
                });
                
                dispatch(setTemplates(Types));
                return;
              }
            } catch (error) {
              console.log("ee", error);
            }
          }
        } catch (error) {
          console.log("ee", error);
          toast.error(error.response.data.message)
        }
      }
    };
    API();
  }, [loader]);

  const handleChange = ({ index, value }) => {
    return dispatch(setTemplate({ index, value }));
  };

  

  const handleSubmit = async (index) => {
    const getTemple = templates.filter((_, idx) => idx === index)[0];

    if (
      getTemple.type_name === "SEND_OTP" &&
      !getTemple?.template.includes("{{otpCode}}")
    ) {
      toast.error("The message is missing the {{otpCode}} placeholder.");
      return;
    }

    if (
      getTemple.type_name === "Create_Account" &&
      (
        // !getTemple?.template.includes("{{otpCode}}") || 
        !getTemple?.template.includes("{{clinicName}}")
      )
    ) {
      toast.error(
        "The message is missing the {{clinicName}} or placeholder."
      );
      return;
    }

    if (
      getTemple.type_name === "Patients_Appoinment" &&
      (!getTemple?.template.includes("{{clinicName}}") ||
        !getTemple?.template.includes("{{date}}") ||
        !getTemple?.template.includes("{{time}}") ||
        !getTemple?.template.includes("{{name}}"))
    ) {
      toast.error(
        "The message is missing the {{clinicName}}, {{date}}, {{time}}, or {{name}} placeholder."
      );
      return;
    }

    if (getTemple) {
      try {
        setLoader(true);
        const { success, message } = await ApiRequest.put(
          `/sms_template/${getTemple.templateID}`,
          {
            smstypeId: getTemple.type_id,
            body: getTemple.template,
          }
        );

        if (success) {
          setLoader(false);
          setopen(null);
          setEditable(null);
          return toast.success(message);
        }
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
    }
  };

  return (
    <div className="container">
      <div className="table-box">
        <h1 className="text-[22px] font-semibold pb-6">Templates</h1>

        <div className="template-container">
          {templates?.map((item, index) => {
            return (
              <TemplateBox
                open={open === index ? true : false}
                setOpen={(e) => (e === open ? setopen(null) : setopen(e))}
                title={`${item?.type_name} Template`}
                edit={editable === index ? false : true}
                enableEdit={(e) => setEditable(e)}
                onChange={handleChange}
                value={item?.template}
                index={index}
                submit={handleSubmit}
                loader={loader}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
