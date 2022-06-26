import React, { useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import ListContent from "../../Component/ListContent";
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
import { addList } from "../../Redux/Lists/listSlice";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

const Board = () => {
  const unique_id = uuid();
  const id_ = unique_id.slice(0, 4);
  const [listContent, setListContent] = useState({
    id: 0,
    title: "",
    cards: { id: 8 },
  });
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

  const list = useSelector((state) => state.Lists);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    setListContent({
      id: id_,
      title: e.target.value,
      cards: {},
    });
  };

  return (
    <>
      <NavBoard></NavBoard>
      <ContainerBoard>
        {list.map((e, i) => {
          return (
            <ListWrapper key={i}>
              <ListContent list={e} onClick={() => setId(i)} />
            </ListWrapper>
          );
        })}
        {open ? (
          <AddTitle>
            <TextTitle
              placeholder="Add list title"
              onChange={handleChange}
              value={listContent.title}
            />
            <Cont>
              <Add
                onClick={() => {
                  dispatch(addList(listContent));
                  setListContent({
                    id: 0,
                    title: "",
                    cards: {},
                  });
                }}
              >
                Add
              </Add>
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
