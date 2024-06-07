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

import { IoMdReturnLeft } from "react-icons/io";


const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  const { MenuItem } = menuItem();
  const { location, toggle } =
    SideMenuFunction();
  const { sidebarStatus } = useSelector((state) => state.sidebarInfo);


  return (
    <div className="sidebar-container">
      <div
        className={`sidebar ${
          sidebarStatus
            ? "2xl:w-[300px] xl:w-[300px] lg:w-[300px] md:w-[300px]: sm:w-[300px] xs:w-[70px] xss:w-[70px] mobile:w-[70px]"
            : " w-[70px]"
        }`}
      >
        <div
          className={`top_sectiom ${
            sidebarStatus ? "h-[100px] object-contain 2xl:px-5 xl:px-5 lg:px-5 md:px-5 sm:px-5 xs:px-0 xss:px-0 mobile:px-0" : "h-[100px]"
          } `}
        >
          {/* <div className="  w-full  overflow-hidden">
            <img
              src={sidebarStatus ? LogoFull : Logo}
              className=" 2xl:block xl:block lg:block md:block sm:block xs:hidden xss:hidden mobile:hidden"
            />
            <img
              src={Logo}
              className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block xss:block mobile:block"
            />
          </div> */}
          {/* <h1
            className={`logo ${
              sidebarStatus
                ? "block ml-[30px]  transition-all duration-300"
                : "hidden "
            }`}
          >
            logo
          </h1> */}
        </div>
        <hr className=" text-white" />

        {MenuItem().map((item, index) => {
          const isActive =
            location.pathname.replace(/[\/\d]/g, "") === item.activeName;
          // const isAddStore =
          //   location.pathname.replace(/[\/\d]/g, "") === "add-store";
          // const isAddCategory =
          //   location.pathname.replace(/[\/\d]/g, "") === "add-category";
          // const isAddClerk =
          //   location.pathname.replace(/[\/\d]/g, "") === "add-clerk";
          // const isAddItems =
          //   location.pathname.replace(/[\/\d]/g, "") === "add-items";
          const linkClass = [
            // "link",
            // isAddStore && item.activeName === "store" ? "active" : "",
            // isAddCategory && item.activeName === "category" ? "active" : "",
            // isAddClerk && item.activeName === "clerks" ? "active" : "",
            // isAddItems && item.activeName === "all-items" ? "active" : "",

            isActive
              ? "active"
              : item.activeName === "menu"
              ? "InActive"
              : "hover:bg-white hover:text-primary_color",
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
              <div className="link_text 2xl:block xl:block lg:block md:block sm:block xs:hidden xss:hidden mobile:hidden">{item.name}</div>
            </NavLink>
          );
        })}

        {location.pathname.replace(/[\/\d]/g, "") !== "store" &&
          location.pathname.replace(/[\/\d]/g, "") !== "dashboard" &&
          location.pathname.replace(/[\/\d]/g, "") !== "add-store" && (
            <>
            <span
            onClick={() => navigate("/store")}
            className=" cursor-pointer absolute  2xl:w-[252px] xl:w-[252px] lg:w-[252px] md:w-[202px] sm:w-[202px] bottom-3  text-white transition-all duration-200 hover:bg-white hover:text-primary_color p-4 text-center 2xl:block xl:block lg:block md:block sm:block xs:hidden xss:hidden mobile:hidden"
          >
            {
              sidebarStatus ? <div className="flex items-center w-full gap-6"><IoMdReturnLeft size={25} />  Return to stores</div> : <IoMdReturnLeft size={25} />
            }
            
          </span>
            <span
              onClick={() => navigate("/store")}
              className=" cursor-pointer absolute left-2  bottom-3 text-white  hover:text-primary_color text-center 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block xss:block mobile:block"
            >
             <IoMdReturnLeft size={25} />
            </span>
            </>
          )}
      </div>
      <div className=" flex flex-col 2xl:w-full xl:w-full lg:w-full w-screen  h-screen overflow-auto">
        {/* <Navbar /> */}

      
        <main className="py-2 h-screen overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
