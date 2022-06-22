import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  margin: 3% auto;
  background-color: white;
  border-radius: 0.25rem;
  padding: 2rem;
  position: relative;
  display: flex;
  width: 50%;
  height: 80%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(145, 158, 171, 0.12);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 32px;
  height: 32px;
  padding: 0px;
  z-index: 10;
  cursor: pointer;
`;
