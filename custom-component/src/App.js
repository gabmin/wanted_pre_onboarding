import styled from "styled-components";
import Toggle from "./components/Toggle";
import Modal from "./components/Modal";
import Tab from "./components/Tab";
import Tag from "./components/Tag";
import AutoComplete from "./components/AutoComplete";
import ClickToEdit from "./components/ClickToEdit";

function App() {
  return (
    <Container>
      <Title> 프리온보딩 선발 과제 </Title>
      <Grid>
        <Toggle />
        <Modal />
        <Tab />
        <Tag />
        <AutoComplete />
        <ClickToEdit />
      </Grid>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;
