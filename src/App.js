import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import EditTodo from "./components/EditTodo/EditTodo";
import ReadTodo from "./components/ReadTodo/ReadTodo";

function App() {
  const [modal, setModal] = useState(false)
  const [valueInputs, setValueInputs] = useState({
    name: "",
    desc: "",
  });

  const [array, setArray] = useState([]);

  return (
    <div className="App">
      <AddTodo valueInputs={valueInputs} setValueInputs={setValueInputs} array={array} setArray={setArray} />
      <ReadTodo array={array} setArray={setArray}  modal={modal} setModal={setModal}/>
      <EditTodo modal={modal} setModal={setModal}/>
    </div>
  );
}

export default App;
