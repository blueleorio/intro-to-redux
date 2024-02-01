import React from "react";
import counterReducer from "./features/counter/reducer";
import { Counter } from "./features/counter/Counter";
function App() {
  return (
    <div className="App">
      {/* <p>Intro To Redux</p> */}
      <Counter />
    </div>
  );
}

export default App;
