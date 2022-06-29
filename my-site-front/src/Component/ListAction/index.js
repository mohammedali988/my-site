import React from "react";
import { Actions, Divider, Header, icon, Item, Items } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteList } from "../../Redux/Lists/listSlice";
import { newCard } from "../../Redux/Lists/createCardSlice";
import { deleteAllCards } from "../../Redux/Lists/cardSlice";

const ActionList = ({ id, list }) => {
  const dispatch = useDispatch();

  console.log(list, "here is the list");
  return (
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
        <Item>Move all cards in this list..</Item>
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
  );
};

export default ActionList;
