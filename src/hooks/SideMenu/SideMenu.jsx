import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setSidebar } from "../../Redux/Slice/Sidebar";
import { useState } from "react";
import { clearUser } from "../../Redux/Slice/User";


const SideMenu = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modalpopup, setModalpopup] = useState(false)

  const toggle = () => {
    dispatch(setSidebar());
  };

  const navigateBreadCrumbs = (path) => {
    if (path) {
      return navigate(path);
    }
  };

  const openModal = () => {
    setModalpopup(!modalpopup)
  }

  const logout = () => {
   return dispatch(clearUser())
  }

  return {
    location,
    toggle,
    navigateBreadCrumbs,
    openModal,
    modalpopup,
    logout
  };
};

export default SideMenu;
