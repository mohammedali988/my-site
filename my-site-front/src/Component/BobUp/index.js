import React from "react";
import ActionList from "../ListAction";
import { Wrapper } from "./style";

const PopUp = ({ open, setOpenPopUp, id, list }) => {
  return (
    <>
      {open && (
        <Wrapper onMouseLeave={() => setOpenPopUp(false)}>
          <ActionList id={id} list={list} />
        </Wrapper>
      )}
    </>
  );
};

export default PopUp;
