import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 30px;
  cursor: pointer;
  margin-bottom: 5px;
`;

export const Title = styled.span`
  font: 15px Arial, sans-serif;
  flex-grow: 1;
  margin-left: 8px;
`;

export const Btn = styled.button`
  display: flex;
  width: 30px;
  height: 100%;
  border-radius: 5px;
  border: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;

  &: hover {
    background-color: rgba(145, 158, 171, 0.3);
  }
`;

export const icons = { fontSize: "20px" };
export const penStyle = { marginRight: "8px" };
export const closed = { fontSize: "30px", marginLeft: "8px" };

export const Cards = styled(Container)`
  height: 34px;
  border-radius: 4px;
  background-color: rgba(145, 158, 171, 0.12);

  &: hover {
    background-color: rgba(145, 158, 171, 0.3);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const AddCards = styled(Container)`
  height: 34px;
  border-radius: 4px;
  justify-content: space-between;
`;

export const AddBtn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  padding-left: 8px;
  border-radius: 5px;
  margin-right: 2%;

  &: hover {
    background-color: rgba(145, 158, 171, 0.3);
  }
`;

export const CardsDetail = styled(Container)`
  flex-direction: column;
  height: 100%;
  cursor: context-menu;
`;

export const AddText = styled.textarea`
  width: 98%;
  border-radius: 5px;
  border-color: rgba(145, 158, 171, 0.3);
  margin-bottom: 5px;

  &: hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const CardAction = styled(Container)`
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`;
