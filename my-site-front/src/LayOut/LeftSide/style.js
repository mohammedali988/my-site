import styled from "styled-components";

export const LeftSideDiv = styled.div`
  width: 250px;
  height: 100vh;
  padding: 10px;
  background-image: none;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  border-right: 1px solid rgba(145, 158, 171, 0.24);
  // left: ${({ sideBar }) => (sideBar ? "0" : "-100%")};
  left: 0;
  transition: 0.4s ease-in-out;
  z-index: 10;
`;
