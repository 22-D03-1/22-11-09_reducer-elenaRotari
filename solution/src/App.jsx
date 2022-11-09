import { useReducer } from "react";
import "./App.scss";
import Reciep from "./components/Reciep";
import reducer, { INITIAL } from "./reducer.js";

function App() {
  const [state, dispach] = useReducer(reducer, INITIAL);

  return (
    <div className="App">
      <Reciep dispach={dispach} state={state} />
    </div>
  );
}

export default App;
