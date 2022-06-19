import React from "react";
import { Icon, Item, Label, SideLink } from "./sideListStyle";

const Menu = ({ item, active, onSetActive }) => {
  return (
    <>
      <SideLink to={item.path}>
        <Item active={active} onClick={onSetActive}>
          <Icon>{item.icon}</Icon>
          <Label>{item.title}</Label>
        </Item>
      </SideLink>
    </>
  );
};

export default Menu;
