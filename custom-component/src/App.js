import "./App.css";
import Toggle from "./components/Toggle";
import Modal from "./components/Modal";
import Tab from "./components/Tab";
import Tag from "./components/Tag";
import ClickToEdit from "./components/ClickToEdit";

function App() {
  return (
    <>
      <h1> 수강생 선발 과제 </h1>
      <div>
        <Toggle />
      </div>
      <div>
        <Modal />
      </div>
      <div>
        <Tab />
      </div>
      <div>
        <Tag />
      </div>
      <div>
        <ClickToEdit />
      </div>
    </>
  );
}

export default App;
