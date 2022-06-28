import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  height: fit-content;
  z-index: 1000;
  background-color: white;
  opacity: 1;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(145, 158, 171, 0.12);
  border-radius: 10px;
  right: -90%;
  top: 100%;
`;
