import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideLink = styled(Link)`
  display: flex;
  color: white;
  text-decoration: none;
  margin-top: 4px;
`;
export const Label = styled.span`
  text-transform: capitalize;
  padding: 8px;
  font-size: 1rem;
  font-family: "Public Sans", sans-serif;
`;

export const Item = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 8px;
  height: 35px;
  border-radius: 8px;
  color: rgb(99, 115, 129);

  &:hover {
    background-color: rgba(32, 101, 209, 0.08);
    color: rgba(32, 101, 209);
  }

  ${({ active }) =>
    active &&
    `background-color: rgba(32, 101, 209, 0.08); color:rgba(32, 101, 209)`}
`;

export const Icon = styled.span`
  padding: 8px;
  font-size: 1.5rem;
  font-family: "Public Sans", sans-serif;
  font-weight: 400;
`;
