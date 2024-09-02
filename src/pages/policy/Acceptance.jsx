import React, { useEffect, useMemo, useState } from "react";

import ApiRequest from "../../services/httpService";
import toast from "react-hot-toast";
const Acceptance = () => {
  const [policy, setpolicy] = useState("");

  useEffect(() => {
    const API = async () => {
      try {
        const { success, terms_and_conditionss } = await ApiRequest.get(
          "/getterms_and_conditions"
        );

        if (success) {
          setpolicy(terms_and_conditionss?.[0]?.content);
          return;
        }
      } catch (error) {
        toast.error(error.response.data.error);
      }
    };

    API();
  }, []);

  const memoizedPolicy = useMemo(() => policy, [policy]);

  return (
    <div className=" w-[70%] h-full overflow-auto mx-auto">
      <h1 className=" mt-6 font-semibold text-[18px]">Terms and Condition</h1>
      <pre
        style={{
          whiteSpace: "pre-wrap", // Enables text wrapping
          width: "100%", // Sets the width to full
          overflowWrap: "break-word", // Breaks long words
        }}
      >
        {`
${memoizedPolicy}
`}
      </pre>
    </div>
  );
};

export default Acceptance;
