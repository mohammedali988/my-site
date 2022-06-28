import React from "react";
import ActionList from "../ListAction";
import { Wrapper } from "./style";

const PopUp = ({ open, setOpenPopUp }) => {
  return (
    <>
      {open && (
        <Wrapper onMouseLeave={() => setOpenPopUp(false)}>
          <ActionList />
        </Wrapper>
      )}
    </>
  );
};

export default PopUp;
