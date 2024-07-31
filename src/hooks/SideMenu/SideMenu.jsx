import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setSidebar } from "../../Redux/Slice/Sidebar";
import { useState } from "react";
import { clearUser } from "../../Redux/Slice/User";
import { clearTable } from "../../Redux/Slice/TableDatas";
import { clearTemplate } from "../../Redux/Slice/Prescription";
import { clearSMStemplate } from "../../Redux/Slice/SMSTemplate";
import { clearNotification } from "../../Redux/Slice/Notification";
import { clearDosage } from "../../Redux/Slice/Dosage";

const SideMenu = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modalpopup, setModalpopup] = useState(false);

  const toggle = () => {
    dispatch(setSidebar());
  };

  const navigateBreadCrumbs = (path) => {
    if (path) {
      return navigate(path);
    }
  };

  const openModal = () => {
    setModalpopup(!modalpopup);
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(clearTable());
    dispatch(clearTemplate());
    dispatch(clearSMStemplate());
    dispatch(clearNotification());
    dispatch(clearDosage());
    return dispatch(clearUser());
  };

  return {
    location,
    toggle,
    navigateBreadCrumbs,
    openModal,
    modalpopup,
    logout,
  };
};

export default SideMenu;
