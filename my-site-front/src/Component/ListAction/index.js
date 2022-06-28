import React from "react";
import { Actions, Divider, Header, icon, Item, Items } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteList } from "../../Redux/Lists/listSlice";

const ActionList = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <Actions>
      <Header>
        <span>List Action</span>
        <AiOutlineClose style={icon} />
      </Header>
      <Divider />
      <Items>
        <Item>Add Card..</Item>
        <Item>Copy list..</Item>
        <Item>Move list..</Item>
        <Item>Watch</Item>
      </Items>
      <Divider />
      <Items>
        <Item>Move all cards in this list..</Item>
        <Item>Archive all cards in this list..</Item>
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
