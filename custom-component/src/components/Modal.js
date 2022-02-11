import { React, useState } from "react";
import styled from "styled-components";

const Modal = () => {
  const [state, setState] = useState(false);
  const onClickBtn = () => {
    setState(true);
  };

  const onClickClose = () => {
    setState(false);
  };
  return (
    <Container>
      <Title>Modal</Title>
      <ModalBtn onClick={onClickBtn}>Open Modal</ModalBtn>
      {state ? (
        <ModalContainer>
          <ModalGrid>
            <CloseBtn onClick={onClickClose}>X</CloseBtn>
            <h3>Hello, world!</h3>
          </ModalGrid>
        </ModalContainer>
      ) : null}
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  width: 600px;
  height: 200px;
  border: 1px solid gray;
  border-radius: 30px;
  margin: 30px auto;
  position: relative;
`;

const Title = styled.div`
  font-weight: bold;
  margin: 15px 0px 0px 15px;
`;

const ModalBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: #4207c6;
  display: block;
  margin: 40px auto;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  width: 600px;
  height: 200px;
  border: none;
  border-radius: 30px;
  margin: auto;
  position: absolute;
  top: 0px;
  background-color: rgba(197, 197, 197, 0.5);
`;

const ModalGrid = styled.div`
  width: 300px;
  height: 100px;
  margin: 50px auto;
  background-color: #fff;
  padding: 5px;
  text-align: center;
  border-radius: 10px;
`;

const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  display: block;
  margin: 5px auto;
  cursor: pointer;
`;
