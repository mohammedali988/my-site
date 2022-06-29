import React, { useState } from "react";
import { Actions, Divider, Header, icon, Item, Items } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteList } from "../../Redux/Lists/listSlice";
import { newCard } from "../../Redux/Lists/createCardSlice";
import { deleteAllCards } from "../../Redux/Lists/cardSlice";
import MoveAllCards from "./moveAllCards";

const ActionList = ({ id, list }) => {
  const dispatch = useDispatch();

  const [optionMove, setOptionMove] = useState(false);
  const [parent, setParent] = useState(true);

  return (
    <>
      <MoveAllCards
        open={optionMove}
        setClose={setOptionMove}
        setParent={setParent}
        list={list}
      />
      {parent ? (
        <Actions>
          <Header>
            <span>List Action</span>
            <AiOutlineClose style={icon} />
          </Header>
          <Divider />
          <Items>
            <Item
              onClick={() => {
                dispatch(newCard(list.id));
              }}
            >
              Add Card..
            </Item>
            <Item>Copy list..</Item>
            <Item>Move list..</Item>
            <Item>Watch</Item>
          </Items>
          <Divider />
          <Items>
            <Item
              onClick={() => {
                setOptionMove(true);
                setParent(false);
              }}
            >
              Move all cards in this list..
            </Item>
            <Item
              onClick={() => {
                dispatch(deleteAllCards(list.id));
              }}
            >
              Archive all cards in this list..
            </Item>
          </Items>
          <Divider />
          <Item
            onClick={() => {
              dispatch(deleteList(id));
            }}
          >
            Archive this list
          </Item>
        </Actions>
      ) : null}
    </>
  );
};

export default ActionList;
