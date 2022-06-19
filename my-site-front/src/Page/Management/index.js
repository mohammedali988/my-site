import React, { useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import {
  Add,
  AddList,
  AddTitle,
  CloseIco,
  Cont,
  ContainerBoard,
  iconStyle,
  ListWrapper,
  NavBoard,
  SpanStyle,
  TextTitle,
} from "./style";

const Board = () => {
  const [lists, setLists] = useState([]);
  const [listContent, setListContent] = useState({
    title: "",
    id: 0,
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    setListContent({
      title: e.target.value,
      id: Math.floor(10 * Math.random()),
    });
  };

  const addToLists = () => {
    if (listContent.title !== "") {
      setLists((prev) => [...prev, listContent]);
      setListContent({
        title: "",
        id: 0,
      });
    }
  };

  return (
    <>
      <NavBoard></NavBoard>
      <ContainerBoard>
        {lists.map((e, i) => {
          return <ListWrapper key={i}>{e.title}</ListWrapper>;
        })}
        {open ? (
          <AddTitle>
            <TextTitle
              placeholder="Add list title"
              onChange={handleChange}
              value={listContent.title}
            />
            <Cont>
              <Add onClick={addToLists}>Add</Add>
              <AiOutlineClose onClick={handleOpen} style={CloseIco} />
            </Cont>
          </AddTitle>
        ) : (
          <AddList onClick={handleOpen}>
            <AiOutlinePlus style={iconStyle} />
            <SpanStyle>add List</SpanStyle>
          </AddList>
        )}
      </ContainerBoard>
    </>
  );
};

export default Board;
