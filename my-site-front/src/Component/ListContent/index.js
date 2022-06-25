import React, { useState } from "react";
import {
  Cards,
  icons,
  Btn,
  Title,
  Container,
  AddBtn,
  AddCards,
  penStyle,
  CardsDetail,
  AddText,
  CardAction,
  closed,
} from "./style";
import { Add } from "../../Page/Management/style";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { HiOutlineTemplate } from "react-icons/hi";
import Modal from "../Modal";
import PopUp from "../BobUp";

const ListContent = ({ list }) => {
  const [pen, setPen] = useState(false);
  const [newCard, setNewCard] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal}></Modal>
      <Container>
        <Title>{list.title}</Title>
        <Btn>
          <BiDotsHorizontalRounded
            style={icons}
            onClick={() => setOpenPopUp(true)}
          />
        </Btn>
        <PopUp open={openPopUp} setOpenPopUp={setOpenPopUp}></PopUp>
      </Container>
      {Object.keys(list.cards).length ? (
        <Cards
          onMouseEnter={() => setPen(true)}
          onMouseLeave={() => setPen(false)}
          onClick={() => setOpenModal(true)}
        >
          <Title>{list.cards.title}</Title>
          {pen && <BsFillPencilFill style={penStyle} />}
        </Cards>
      ) : null}
      {newCard ? (
        <>
          <CardsDetail>
            <AddText rows={4}></AddText>
            <CardAction>
              <Add>Add </Add>
              <AiOutlineClose
                style={closed}
                onClick={() => setNewCard(false)}
              />
            </CardAction>
          </CardsDetail>
        </>
      ) : (
        <AddCards>
          <AddBtn onClick={() => setNewCard(true)}>
            <AiOutlinePlus style={icons} />
            <Title>Add a card..</Title>
          </AddBtn>
          <Btn>
            <HiOutlineTemplate style={icons} />
          </Btn>
        </AddCards>
      )}
    </>
  );
};

export default ListContent;
