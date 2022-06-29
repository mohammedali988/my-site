import styled from "styled-components";

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  padding: 0.7rem 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const HeadTitle = styled.span``;

export const icon = {
  position: "absolute",
  right: "1.2rem",
  top: "1rem",
};

export const arrowIcon = {
  position: "absolute",
  left: "1.2rem",
  top: "1rem",
};

export const Divider = styled.hr`
  border-top: 1px solid #bbb;
  background-color: #bbb;
  width: 100%;
`;

export const Items = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const Item = styled.li`
  margin-bottom: 8px;
  padding: 4px;
  border-radius: 8px;
  list-style-type: none;

  &: hover {
    background-color: rgba(145, 158, 171, 0.12);
  }
`;

export const CurrentStyle = styled.span`
  color: #b3b3ff;
`;
