import "./App.css";
import Card from "../Card/Card";
import { useState, useRef } from "react";
import Filter from "../Filter/Filter";

function App() {
  const inputEl = useRef(null);
  const [filter, setFilter] = useState("");
  const [cardToggle, setCardToggle] = useState(true);
  const [boys, setBoys] = useState([
    {
      name: "Mostafa",
      age: 27,
      address: "Ain Shams",
      phone: "011266549387",
    },
    {
      name: "Reda",
      age: 25,
      address: "Ain Shams",
      phone: "01656549387",
    },
    {
      name: "Amr",
      age: 22,
      address: "Ain Shams",
      phone: "0112653549387",
    },
  ]);
  const girls = [
    {
      name: "yasmeen",
      age: 27,
      address: "Ain Shams",
      phone: "011266549387",
    },
    {
      name: "Sara",
      age: 25,
      address: "Ain Shams",
      phone: "01656549387",
    },
    {
      name: "Tala",
      age: 22,
      address: "Ain Shams",
      phone: "0112653549387",
    },
  ];
  const toggleHandler = () => {
    setCardToggle(!cardToggle);
  };
  const deleteHandler = (e, clickedIndex) => {
    // const deleteOperation = boys.filter((el, index) => index !== clickedIndex);
    // setBoys(deleteOperation);
    // console.log(deleteOperation);
    setBoys((prev) => {
      return prev.filter((el, index) => index !== clickedIndex);
    });
  };
  const testHandler = () => {
    console.log(inputEl.current.value);
  };
  const btnHandler = () => {
    inputEl.current.focus();
  };
  const filterNames = (name) => {
    setFilter(name);
  };
  const namesHandler = () => {
    if (filter.length !== 0) {
      return girls.filter((el) => el.name.includes(filter));
    }
    return girls;
  };
  return (
    <div className="mainContainer">
      <h1>Boys Data</h1>
      <Card namesList={boys} type="men" deleteFun={deleteHandler} />
      <h1>Girls Data</h1>
      <button style={{ marginBottom: "5px" }} onClick={toggleHandler}>
        {cardToggle ? "Show" : "Hide"} Names
      </button>
      <Filter filteration={filterNames} />
      <div className="" style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="for testing ref"
          ref={inputEl}
          onChange={testHandler}
        />
        <button onClick={btnHandler}>Click Me</button>
      </div>
      <div className={cardToggle ? "show" : "hide"}>
        <Card namesList={namesHandler()} type="women" />
      </div>
    </div>
  );
}

export default App;
