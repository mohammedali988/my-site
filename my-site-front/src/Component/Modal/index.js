import React, { useRef } from "react";
import { Background, ModalWrapper } from "./style";

const Modal = ({ open, setOpen, children }) => {
  const modalRef = useRef();

  const closeRef = (e) => {
    if (modalRef.current === e.target) {
      setOpen(false);
    }
  };
  return (
    <>
      {open && (
        <Background ref={modalRef} onClick={closeRef}>
          <ModalWrapper>{children}</ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default Modal;
