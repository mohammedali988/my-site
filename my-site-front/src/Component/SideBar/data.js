import { AiFillHome, AiOutlineMessage, AiOutlineTeam } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosPaper } from "react-icons/io";
import { MdOutlineManageAccounts, MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";

export const sideBarData = [
  {
    title: "Management Board",
    path: "/management/board",
    icon: <MdOutlineManageAccounts />,
    closeIcon: <IoIosArrowUp />,
    openIcon: <IoIosArrowDown />,
    active: false,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIosPaper />,
    closeIcon: <IoIosArrowUp />,
    openIcon: <IoIosArrowDown />,
    active: false,
  },
  {
    title: "Products",
    path: "/products",
    icon: <MdProductionQuantityLimits />,
    active: false,
  },
  {
    title: "Team",
    path: "/team",
    icon: <AiOutlineTeam />,
    active: false,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <AiOutlineMessage />,
    closeIcon: <IoIosArrowUp />,
    openIcon: <IoIosArrowDown />,
    active: false,
    subNav: [
      {
        title: "Member",
        path: "/messages/member",
        icon: <IoIosPaper />,
      },
      {
        title: "Team",
        path: "/messages/team",
        icon: <IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <MdOutlineContactSupport />,
    active: false,
  },
];
