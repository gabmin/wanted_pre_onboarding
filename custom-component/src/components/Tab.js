import { React, useState } from "react";
import styled from "styled-components";

const Tab = () => {
  const [state, setState] = useState("ONE");

  const onClickTab1 = () => {
    setState("ONE");
  };
  const onClickTab2 = () => {
    setState("TWO");
  };
  const onClickTab3 = () => {
    setState("THREE");
  };
  return (
    <Container>
      <Title>Tab</Title>
      <TabGrid>
        <TabBox1 onClick={onClickTab1} state={state}>
          Tab1
        </TabBox1>
        <TabBox2 onClick={onClickTab2} state={state}>
          Tab2
        </TabBox2>
        <TabBox3 onClick={onClickTab3} state={state}>
          Tab3
        </TabBox3>
      </TabGrid>
      <Desc>Tab Manu {state}</Desc>
    </Container>
  );
};

export default Tab;

const Container = styled.div`
  width: 600px;
  height: 200px;
  border: 1px solid gray;
  border-radius: 30px;
  margin: auto;
`;

const Title = styled.div`
  font-weight: bold;
  margin: 15px 0px 0px 15px;
`;

const TabGrid = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  margin: auto;
`;

const TabBox1 = styled.button`
  width: 100%;
  background-color: ${(props) =>
    props.state === "ONE" ? "#4207c6" : "#c5c5c5"};
  color: ${(props) => (props.state === "ONE" ? "#ffffff" : "#F2E6F7")};
  font-weight: bold;
  border: none;
  text-align: left;
  padding-left: 10px;
  cursor: pointer;
`;
const TabBox2 = styled.button`
  width: 100%;
  background-color: ${(props) =>
    props.state === "TWO" ? "#4207c6" : "#c5c5c5"};
  color: ${(props) => (props.state === "TWO" ? "#ffffff" : "#F2E6F7")};
  font-weight: bold;
  border: none;
  text-align: left;
  padding-left: 10px;
  cursor: pointer;
`;
const TabBox3 = styled.button`
  width: 100%;
  background-color: ${(props) =>
    props.state === "THREE" ? "#4207c6" : "#c5c5c5"};
  color: ${(props) => (props.state === "THREE" ? "#ffffff" : "#F2E6F7")};
  font-weight: bold;
  border: none;
  text-align: left;
  padding-left: 10px;
  cursor: pointer;
`;

const Desc = styled.h4`
  text-align: center;
`;
