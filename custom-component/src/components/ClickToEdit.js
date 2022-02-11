import { React, useState, useCallback, memo } from "react";
import styled from "styled-components";

const ClickToEdit = memo(() => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const onChangeAge = useCallback((e) => {
    setAge(e.target.value);
  }, []);

  return (
    <Container>
      <Title>ClickToEdit</Title>
      <InputGrid>
        이름{" "}
        <Input
          onChange={onChangeName}
          value={name}
          onBlur={() => {
            setInputName(name);
          }}
        ></Input>
      </InputGrid>
      <InputGrid>
        나이{" "}
        <Input
          onChange={onChangeAge}
          value={age}
          onBlur={() => {
            setInputAge(age);
          }}
        ></Input>
      </InputGrid>
      <Desc>
        이름 {inputName} 나이 {inputAge}
      </Desc>
    </Container>
  );
});

export default ClickToEdit;

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

const InputGrid = styled.div`
  margin: 30px auto;
  text-align: center;
`;

const Input = styled.input`
  width: 200px;
  height: 20px;
  margin-left: 20px;
`;

const Desc = styled.div`
  text-align: center;
`;
