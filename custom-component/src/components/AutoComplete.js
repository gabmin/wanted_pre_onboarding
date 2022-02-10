import { React, useState } from "react";
import styled from "styled-components";

const AutoComplete = () => {
  const [contents, setContents] = useState("");

  // 더미 데이터
  const data = [
    "apple",
    "banana",
    "coding",
    "dance",
    "english",
    "fire",
    "good",
    "hello",
    "internet",
    "jelly",
  ];

  // 검색 데이터
  let search = data.filter((word) =>
    word.includes(contents === "" ? null : contents)
  );

  // 입력 내용
  const onChangeText = (e) => {
    setContents(e.target.value);
  };

  // 검색 데이터 클릭
  const onClickText = (e) => {
    setContents(e);
  };
  console.log(search);
  // 초기화 버튼
  const onClickClear = () => {
    setContents("");
  };

  return (
    <Container>
      <Title>AutoComplete</Title>
      <InputGrid>
        <Button onClick={onClickClear}>x</Button>
        <Input onChange={onChangeText} value={contents}></Input>
        {contents === "" ? null : <Hr></Hr>}
        {search.map((word, i) => (
          <Text onClick={() => onClickText(word)} key={i}>
            {word}
          </Text>
        ))}
      </InputGrid>
    </Container>
  );
};

export default AutoComplete;

const Container = styled.div`
  width: 600px;
  height: 300px;
  border: 1px solid gray;
  border-radius: 30px;
  margin: auto;
`;

const Title = styled.div`
  font-weight: bold;
  margin: 15px 0px 0px 15px;
`;

const InputGrid = styled.div`
  margin: 50px auto;
  text-align: center;
  position: relative;
  width: 400px;
  height: auto;
  border-radius: 10px;
  border: 2px solid gray;
`;

const Input = styled.input`
  width: 380px;
  height: 30px;
  padding-left: 10px;
  border: none;
  outline: none;
`;

const Button = styled.button`
  border: none;
  font-size: 16px;
  position: absolute;
  background-color: transparent;
  top: 7px;
  right: 10px;
`;

const Hr = styled.hr`
  margin: 0px;
`;

const Text = styled.div`
  font-size: 15px;
  text-align: left;
  padding: 10px;
`;
