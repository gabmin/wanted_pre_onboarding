import { React, useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [state, setstate] = useState(false);

  const onClickBtn = () => {
    setstate(!state);
  };
  return (
    <Container>
      <Title>Toggle</Title>
      <Switch state={state}>
        {/* <BackColor state={state}></BackColor> */}
        <Button onClick={onClickBtn} state={state}></Button>
      </Switch>
      <Text>Toggle Switch {state ? "ON" : "OFF"}</Text>
    </Container>
  );
};

export default Toggle;

const Container = styled.div`
  width: 600px;
  height: 200px;
  border: 1px solid gray;
  border-radius: 30px;
  margin: 30px auto;
`;

const Title = styled.div`
  font-weight: bold;
  margin: 15px 0px 0px 15px;
`;

const Switch = styled.div`
  width: 100px;
  height: 40px;
  margin: 40px auto;
  background-color: ${(props) => (props.state ? "#4207c6" : "#c5c5c5")};
  border-radius: 50px;
  position: relative;
  transition: all ease 0.5s 0s;
`;

// const BackColor = styled.div`
//   width: ${(props) => (props.state ? "100px" : "0px")};
//   height: 40px;
//   margin: 40px auto;
//   border-radius: 50px;
//   background-color: #4207c6;
//   position: absolute;
//   top: -40px;
//   transition: all ease 0.5s 0s;
// `;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 15px;
  position: absolute;
  top: 5px;
  left: ${(props) => (props.state ? "65px" : "5px")};
  transition: all ease 0.5s 0s;
  cursor: pointer;
`;

const Text = styled.div`
  text-align: center;
  margin: 30px auto;
`;
