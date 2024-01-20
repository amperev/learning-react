import "./App.css";
import { useState } from "react";

function App() {
  let [val, setVal] = useState(19);
  //let val = 15;
  const addValue = () => {
    if (val < 20) setVal(val + 1);
  };

  const subtract = () => {
    if (val > 0) setVal(val - 1);
  };

  return (
    <>
      <h1>Chai</h1>
      <h2>counter value: {val}</h2>
      <button onClick={addValue}>add</button>
      <br />
      <button onClick={subtract}>subtract</button>
    </>
  );
}

export default App;
