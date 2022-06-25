import React, { useRef, useState } from "react";
import { Background, Wrapper } from "./style";

const PopUp = ({ open, setOpenPopUp }) => {
  const [list, setList] = useState(["hello", "name", "age", "sex"]);

  return (
    <>
      {open && (
        <Wrapper onMouseLeave={() => setOpenPopUp(false)}>
          {list.map((e, i) => {
            return <h5 key={i}>{e}</h5>;
          })}
        </Wrapper>
      )}
    </>
  );
};

export default PopUp;
