import React from "react";

import AdminNotVerifySVG from "../../../assets/Admin Not verified.png";
import { MdSettingsBackupRestore } from "react-icons/md";




const AdminNotVerify = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col space-y-8">
      <img
        src={AdminNotVerifySVG}
        className=" w-[300px] h-[300px] object-fill"
      />
      <div className="w-[40%]">

        <h1 className="text-[48px] text-center font-semibold">
          Hold on! Verification Needed.
        </h1>
        <p className=" text-gray_text text-center text-[24px]">
          We need to verify your admin account before granting access. Please
          check your email for the verification link or contact support if you
          haven't received it.
        </p>
        <div className="flex items-center justify-center my-4">
          <button onClick={() => window.location.reload()} className=" bg-primary_color text-white w-[200px] py-3 font-semibold rounded-lg flex items-center justify-center gap-4">Refresh <MdSettingsBackupRestore siize={30} /> </button>

        </div>

      </div>
    </div>
  );
};

export default AdminNotVerify;
