import React from "react";
import ActionList from "../ListAction";
import { Wrapper } from "./style";

const PopUp = ({ open, setOpenPopUp, id }) => {
  return (
    <>
      {open && (
        <Wrapper onMouseLeave={() => setOpenPopUp(false)}>
          <ActionList id={id} />
        </Wrapper>
      )}
    </>
  );
};

export default PopUp;
