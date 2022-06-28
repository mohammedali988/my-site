import React, { useState } from "react";
import { Cards, icons, Btn, Title, Container, penStyle } from "./style";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import Modal from "../Modal";
import PopUp from "../BobUp";
import Card from "../CreateCard";

const ListContent = ({ list, index }) => {
  const [pen, setPen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);

  const cards = useSelector((state) => state.Cards);

  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal}></Modal>
      <Container>
        <Title>{list.title}</Title>

        <Btn onClick={() => setOpenPopUp(true)}>
          <BiDotsHorizontalRounded style={icons} />
        </Btn>
        <PopUp
          open={openPopUp}
          setOpenPopUp={setOpenPopUp}
          id={index}
          list={list}
        ></PopUp>
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
      <Card list={list} index={index} />
    </>
  );
};

export default ListContent;
