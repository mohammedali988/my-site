import styled from "styled-components";
import img from "./board-img.jpg";

export const NavBoard = styled.div`
  width: 100%;
  height: 50px;
`;

export const ContainerBoard = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  background-image: url(${img});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  padding: 10px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-width: 300px;
  height: fit-content;
  min-height:50px;
  max-height: 100%;
  background-color: white;
  margin-right: 5px;
  border-radius: 8px;
  padding: 5px;
`;

export const AddList = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 13px;
  width: 300px;
  height: 45px;
  background-color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  margin-right: 5px;
  transition: height 4s;

  &:hover {
    opacity: 0.8;
  }
`;

export const SpanStyle = styled.span`
  margin-left: 5px;
  font-size: 15px;
`;

export const iconStyle = { fontSize: "18px" };

export const AddTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 70px;
  background-color: white;
  border-radius: 8px;
  padding: 5px;
  background-color: rgba(145, 158, 171, 0.3);
`;

export const TextTitle = styled.input`
  height: 20px;
  margin-bottom: 5px;
  border: none;
  padding: 10px;
`;

export const Add = styled.button`
  width: 80px;
  height: 30px;
  background-color: blue;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const Cont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CloseIco = {
  fontSize: "30px",
  marginLeft: "10px",
  cursor: "pointer",
};
