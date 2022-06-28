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
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal";
import PopUp from "../BobUp";
import { addCard } from "../../Redux/Lists/cardSlice";
import { v4 as uuid } from "uuid";

const ListContent = ({ list }) => {
  const [pen, setPen] = useState(false);
  const [newCard, setNewCard] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [card, setCard] = useState({
    title: "",
  });

  const unique_id = uuid();
  const id_ = unique_id.slice(0, 4);
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.Cards);

  const handleAddCardChange = (e, id) => {
    const cardObj = {
      id: id,
      details: {
        id: id_,
        title: e.target.value,
        description: "",
        comment: "",
      },
    };

    if (e.target.value !== "") {
      setCard(cardObj);
    }
  };

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
      {Object.keys(cards).length ? (
        <>
          {cards.map((e, i) => (
            <div key={i}>
              {e.id === list.id && (
                <Cards
                  key={i}
                  onMouseEnter={() => setPen(true)}
                  onMouseLeave={() => setPen(false)}
                  onClick={() => setOpenModal(true)}
                >
                  <Title>{e.details.title}</Title>
                  {pen && <BsFillPencilFill style={penStyle} />}
                </Cards>
              )}
            </div>
          ))}
        </>
      ) : null}
      {newCard ? (
        <>
          <CardsDetail>
            <AddText
              rows={4}
              value={card.title}
              onChange={(e) => handleAddCardChange(e, list.id)}
            ></AddText>
            <CardAction>
              <Add
                onClick={() => {
                  dispatch(addCard(card));
                  setCard({ title: "" });
                }}
              >
                Add{" "}
              </Add>
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
