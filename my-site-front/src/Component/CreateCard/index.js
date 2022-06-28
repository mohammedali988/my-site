import React, { useState } from "react";
import { Add } from "../../Page/Management/style";
import {
  AddBtn,
  AddCards,
  AddText,
  Btn,
  CardAction,
  CardsDetail,
  closed,
  icons,
  Title,
} from "../ListContent/style";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { HiOutlineTemplate } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../Redux/Lists/cardSlice";

import { v4 as uuid } from "uuid";
import { closeCard, newCard } from "../../Redux/Lists/createCardSlice";

const Card = ({ list, index }) => {
  const dispatch = useDispatch();

  const [card, setCard] = useState({
    title: "",
  });
  const openCard = useSelector((state) => state.Card);

  const unique_id = uuid();
  const id_ = unique_id.slice(0, 4);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard(card));
    setCard({ title: "" });
  };

  return (
    <>
      {openCard.open && openCard.id === list.id ? (
        <>
          <form onSubmit={handleSubmit}>
            <CardsDetail>
              <AddText
                rows={4}
                value={card.title}
                onChange={(e) => handleAddCardChange(e, list.id)}
              ></AddText>
              <CardAction>
                <Add type="submit"> Add </Add>
                <AiOutlineClose
                  style={closed}
                  onClick={() => dispatch(closeCard())}
                />
              </CardAction>
            </CardsDetail>
          </form>
        </>
      ) : (
        <AddCards>
          <AddBtn
            onClick={() => {
              dispatch(newCard(list.id));
            }}
          >
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

export default Card;
