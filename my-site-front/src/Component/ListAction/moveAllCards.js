import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import {
  Actions,
  arrowIcon,
  CurrentStyle,
  Divider,
  Header,
  icon,
  Item,
  Items,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { moveAllCards } from "../../Redux/Lists/cardSlice";

const MoveAllCards = ({ open, setClose, setParent, list }) => {
  const lists = useSelector((state) => state.Lists);
  const dispatch = useDispatch();

  //   const moveList = (from, to) => {
  //     ;
  //   };
  return (
    <>
      {open ? (
        <Actions>
          <Header>
            <IoIosArrowBack
              style={arrowIcon}
              onClick={() => {
                setClose(false);
                setParent(true);
              }}
            />
            <span>Move all cards in list</span>
            <AiOutlineClose style={icon} />
          </Header>
          <Divider />
          <Items>
            {lists.map((ele, i) => {
              return (
                <Item
                  key={i}
                  onClick={() => {
                    dispatch(moveAllCards({ from: list.id, to: ele.id }));
                  }}
                >
                  {ele.title}
                  {ele.title === list.title && (
                    <CurrentStyle> (current)</CurrentStyle>
                  )}
                </Item>
              );
            })}
          </Items>
        </Actions>
      ) : null}
    </>
  );
};

export default MoveAllCards;
