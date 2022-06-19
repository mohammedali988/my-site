import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  top: 0;
`;

export const NavLink = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SideBarNav = styled.div`
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

export const CloseNav = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SideBarWrap = styled.div`
  width: 100%;
`;

export const NameDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-radius: 10px;
  background-color: rgba(145, 158, 171, 0.12);
  margin: 10px;
  margin-bottom: 50px;
`;

export const NameSpan = styled.span`
  font-family: Public Sans, sans-serif;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 20px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Avatar = styled.img`
  vertical-align: middle;
  height: 27%;
  width: 27%;
  border-radius: 50%;
`;
