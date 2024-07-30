import React from "react";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { TbTemplate } from "react-icons/tb";

import GridSvgComponent from "../../../assets/Svg/Home";
import DoctorsIcon from "../../../assets/Svg/DoctorsIcon";
import Receptionist from "../../../assets/Svg/Receptionist";
import Medicine from "../../../assets/Svg/Medicine";
import Prescription from "../../../assets/Svg/Prescription";

const menuConfig = [
  {
    paths: [
      "/dashboard",
      "/doctors",
      "/receptionist",
      "/medicine",
      "/add-doctor",
      "/add-recptionist",
      "/add-medicine",
      "/prescription",
      "/dosage-form",
      "/dosage-unit",
      "/templates",
      "/profile"

    ],
    items: [
      {
        path: "/dashboard",
        name: "Home",
        icon: <GridSvgComponent />,
        activeName: "dashboard",
      },
      {
        path: "/doctors",
        name: "Doctors",
        icon: <DoctorsIcon />,
        activeName: "doctors",
      },
      {
        path: "/receptionist",
        name: "Receptionist",
        icon: <Receptionist />,
        activeName: "receptionist",
      },
      {
        path: "/medicine",
        name: "Medicine",
        icon: <Medicine />,
        activeName: "medicine",
      },
      {
        path: "/prescription",
        name: "Prescription",
        icon: <Prescription />,
        activeName: "prescription",
      },
      {
        path: "/dosage-form",
        name: "Dosage Form",
        icon: <Medicine />,
        activeName: "Dosage Form",
      },
      {
        path: "/dosage-unit",
        name: "Dosage Unit",
        icon: <Medicine />,
        activeName: "Dosage Unit",
      },
      {
        path: "/templates",
        name: "Templates",
        icon: <TbTemplate size={30} />,
        activeName: "Templates",
      },
    ],
  },
  // {
  //   paths: ["/store-dashboard", "/category", "/all-items", "/clerks", "/add-category", "/add-clerk", "/category-item", "/add-items"],
  //   items: [
  //     {
  //       path: "/store-dashboard/:id",
  //       name: "Dashboard",
  //       icon: <GridSvgComponent />,
  //       activeName: "store-dashboard",
  //     },
  //     {
  //       path: "/category/:id",
  //       name: "Category",
  //       icon: <CategorySvgComponent />,
  //       activeName: "category",
  //     },
  //     {
  //       path: "/all-items/:id",
  //       name: "All Items",
  //       icon: <AllItemsSvgComponent />,
  //       activeName: "all-items",
  //     },
  //     {
  //       path: "/clerks/:id",
  //       name: "Clerks",
  //       icon: <ClerksSvgComponent />,
  //       activeName: "clerks",
  //     },
  //   ],
  // },
];

const Sidemenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getMenuItems = () => {
    const pathWithoutParams = location.pathname.replace(/\/\d+/g, "");

    for (const config of menuConfig) {
      if (config.paths.includes(pathWithoutParams)) {
        return [
          {
            path: location.pathname,
            name: "Menu",
            icon: <RiMenuUnfold4Line size={35} className="" />,
            activeName: "menu",
          },

          ...config.items.map((item) => ({
            ...item,
            // path: item.path.replace(":id", ID),
          })),
        ];
      }
    }

    return [];
  };

  // React.useEffect(() => {
  //   if (
  //     (!ID && location.pathname.startsWith("/store-dashboard")) ||
  //     (!ID && location.pathname.startsWith("/all-items")) ||
  //     (!ID && location.pathname.startsWith("/category")) ||
  //     (!ID && location.pathname.startsWith("/clerks"))
  //   ) {
  //     navigate("/store");
  //   }
  // }, [ID, location.pathname, navigate]);

  return {
    MenuItem: getMenuItems,
  };
};

export default Sidemenu;
