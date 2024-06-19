import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import menuItem from "./Sidemenu";
import SideMenuFunction from "../../../hooks/SideMenu/SideMenu";
// import Navbar from "../Navbar/Navbar";

// import { FaAngleRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
// import { FiPlus } from "react-icons/fi";
// import LogoFull from "../../../../public/logo/logo-large-roti-ghar (250 x 100 px).png";
// import Logo from "../../../../public/logo/logo-small-roti-ghar (100 x 100 px).png";

import NotificationIcon from "../../../assets/Svg/NotificationIcon";
import { FiLogOut } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import ModelPopup from "../ModelPopup/ModelPopup";
import LogOutModalResponsive from "./LogOutModalResponsive";

const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  const { MenuItem } = menuItem();
  const { location, toggle, modalpopup, openModal, logout } =
    SideMenuFunction();
  const { sidebarStatus } = useSelector((state) => state.sidebarInfo);

  return (
    <div className="sidebar-container">
      <div
        className={`sidebar transition-all duration-500 ${
          sidebarStatus
            ? "2xl:w-[300px] xl:w-[300px] lg:w-[300px] md:w-[300px]: sm:w-[300px] xs:w-[90px] xss:w-[90px] mobile:w-[90px] 2xl:p-4 xl:p-4 lg:p-4 md:p-4 sm:p-2 xs:p-2 xss:p-2 mobile:p-2"
            : " w-[90px] 2xl:p-4 xl:p-4 lg:p-4 md:p-4 sm:p-2 xs:p-2 xss:p-2 mobile:p-2"
        }`}
      >
        <div className="flex-1">
          {MenuItem().map((item, index) => {
            const isActive =
              location.pathname.replace(/[\/\d]/g, "") === item.activeName;
            const isAddDoctor =
              location.pathname.replace(/[\/\d]/g, "") === "add-doctor";
            const isAddMedicine =
              location.pathname.replace(/[\/\d]/g, "") === "add-medicine";
            // const isAddClerk =
            //   location.pathname.replace(/[\/\d]/g, "") === "add-clerk";
            // const isAddItems =
            //   location.pathname.replace(/[\/\d]/g, "") === "add-items";
            const linkClass = [
              "link",
              isAddDoctor && item.activeName === "doctors" ? "active" : "",
              isAddMedicine && item.activeName === "medicine" ? "active" : "",
              // isAddClerk && item.activeName === "clerks" ? "active" : "",
              // isAddItems && item.activeName === "all-items" ? "active" : "",

              isActive
                ? "active"
                : item.activeName === "menu"
                ? "InActive"
                : "hover:bg-navbar_activate_color hover:text-white hover:rounded-2xl",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <NavLink
                to={item.path}
                key={index}
                className={linkClass}
                onClick={() => item.name === "Menu" && toggle()}
              >
                <div className="icon">{item.icon}</div>
                {sidebarStatus && (
                  <div className="link_text 2xl:block xl:block lg:block md:block sm:block xs:hidden xss:hidden mobile:hidden">
                    {item.name}
                  </div>
                )}
              </NavLink>
            );
          })}
        </div>

        <div className=" bottom-section">
          <div className=" flex items-center gap-[15px] px-3 py-3 cursor-pointer hover:bg-navbar_activate_color hover:rounded-xl">
            <NotificationIcon />
            {sidebarStatus && (
              <span className="link_text 2xl:block xl:block lg:block md:block sm:block xs:hidden xss:hidden mobile:hidden">
                Notifications
              </span>
            )}
          </div>
          <hr className=" mt-4 mb-2 text-white" />
          <div className="profile">
            {sidebarStatus && (
              <div className="profile-content 2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden xss:hidden mobile:hidden">
                <img
                  className="w-[35px] h-[35px] rounded-full object-cover 2xl:block xl:block lg:block md:block sm:block xs:hidden xss:hidden mobile:hidden"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s"
                  alt="profile"
                />
                <div className="profile-details">
                  <span className="profile-details-name">Mohamed Thawfeek</span>
                  <span className="profile-details-id">859300</span>
                </div>
              </div>
            )}
            {sidebarStatus ? (
              <FiLogOut
                onClick={openModal}
                size={20}
                className=" cursor-pointer 2xl:block xl:block lg:block md:block sm:block xs:hidden xss:hidden mobile:hidden"
              />
            ) : (
              <div className=" flex items-center gap-[15px] px-4 py-3 cursor-pointer hover:bg-navbar_activate_color hover:rounded-xl">
                <FiLogOut size={20} onClick={openModal} />
              </div>
            )}
            <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block xss:block mobile:block flex items-center gap-[15px] px-4 py-3 cursor-pointer hover:bg-navbar_activate_color hover:rounded-xl">
              <FiLogOut size={20} onClick={openModal} />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col 2xl:w-full xl:w-full lg:w-full w-screen  h-screen overflow-auto">
        {/* <Navbar /> */}

        <main className="py-2 h-screen overflow-auto">{children}</main>
      </div>
      {modalpopup && (
        <>
          <LogOutModalResponsive
            logout={logout}
            modalpopup={modalpopup}
            openModal={openModal}
          />
        </>
      )}
    </div>
  );
};

export default Sidebar;
