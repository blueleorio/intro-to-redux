import React from "react";
import { Counter } from "./features/counter/Counter";
import { MultiCounter } from "./features/multiCounter/multiCounter";
function App() {
  return (
    <div className="App">
      {/* <p>Intro To Redux</p> */}
      <p>Singular Counter:</p>
      <Counter />
      <p>Multiple Counter:</p>
      <MultiCounter />
    </div>
  );
}

export default App;
