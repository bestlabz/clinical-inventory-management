import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setSidebar } from "../../Redux/Slice/Sidebar";


const SideMenu = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggle = () => {
    dispatch(setSidebar());
  };

  const navigateBreadCrumbs = (path) => {
    if (path) {
      return navigate(path);
    }
  };


  return {
    location,
    toggle,
    navigateBreadCrumbs,
  };
};

export default SideMenu;
