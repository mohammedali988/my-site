import React, { useState } from "react";
import { sideBarData } from "./data";
import Menu from "./sideBarList";
import { Avatar, NameDiv, NameSpan, SideBarNav, SideBarWrap } from "./style";

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActive = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <SideBarWrap>
        <div style={{ height: "50px" }}></div>
        <NameDiv>
          <Avatar
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            className="avatar"
          />
          <NameSpan>Mohammed Ali</NameSpan>
        </NameDiv>

        {sideBarData.map((e, i) => {
          return (
            <Menu
              item={e}
              key={i}
              onSetActive={() => {
                handleActive(i);
              }}
              active={activeIndex === i}
            ></Menu>
          );
        })}
      </SideBarWrap>
    </>
  );
};

export default SideBar;

// {/* <CloseNav to="#">
//               <IoIosArrowBack
//                 onClick={showSideBar}
//                 style={{
//                   cursor: "pointer",
//                   display: `${window.innerWidth < 1215 ? "none" : ""}`,
//                 }}
//               />
//             </CloseNav> */}

// useEffect(() => {
//   const hundleResize = () => {
//     if (window.innerWidth < 1215) {
//       setMobile(true);
//       setSideBar(false);
//     } else {
//       setMobile(false);
//       setSideBar(true);
//     }
//   };

//   window.addEventListener("resize", hundleResize);

//   return () => {
//     window.removeEventListener("resize", hundleResize);
//   };
// }, []);
