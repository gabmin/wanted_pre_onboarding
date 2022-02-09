import { React, useState, useCallback } from "react";
import styled from "styled-components";

const Tag = () => {
  const [tag, setTag] = useState("");
  const [tagArr, setTagArr] = useState([]);

  const onChangeTag = useCallback((e) => {
    setTag(e.target.value);
  }, []);

  const onKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        setTagArr([...tagArr, tag]);
        setTag("");
      }
    },
    [setTagArr, tagArr, tag]
  );

  const deleteBtn = (i) => {
    setTagArr(tagArr.filter((e, idx) => idx !== i));
  };

  return (
    <Container>
      <Title>Tag</Title>
      <InputBox>
        {tagArr.map((e, i) => {
          return (
            <TagContainer key={i}>
              <TagTitle>{e}</TagTitle>
              <TagBtn
                onClick={() => {
                  deleteBtn(i);
                }}
              >
                X
              </TagBtn>
            </TagContainer>
          );
        })}
        <Input
          type="text"
          value={tag}
          onChange={onChangeTag}
          onKeyPress={onKeyPress}
          placeholder="Press enter to add tags"
        ></Input>
      </InputBox>
    </Container>
  );
};

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

const InputBox = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  margin: 40px auto;
  border-radius: 10px;
  border: 1px solid black;
  padding: 5px;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  height: 30px;
  outline: none;
`;
const TagContainer = styled.div`
  height: 30px;
  background-color: #4207c6;
  display: inline-flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`;

const TagTitle = styled.div`
  color: #ffffff;
  align-items: center;
  font-size: 13px;
  margin: 0px 6px;
  font-weight: bold;
`;

const TagBtn = styled.button`
  width: 15px;
  height: 15px;
  font-size: 10px;
  text-align: center;
  color: #4207c6;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 50%;
  margin: 0px 6px 0px 0px;
  cursor: pointer;
`;

export default Tag;
