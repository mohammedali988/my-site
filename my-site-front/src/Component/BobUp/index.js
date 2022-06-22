import React, { useState } from "react";
import { Wrapper } from "./style";

const PopUp = ({ open }) => {
  const [list, setList] = useState(["hello", "name", "age", "sex"]);

  return (
    <>
      {open && (
        <Wrapper>
          {list.map((e, i) => {
            return <h5 key={i}>{e}</h5>;
          })}
        </Wrapper>
      )}
    </>
  );
};

export default PopUp;
