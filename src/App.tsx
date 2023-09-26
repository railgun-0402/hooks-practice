import React, { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import ContextA from './components/ContextSample/ContextA';

const initialState = 0;

const reducer = (state: number, action: { type: any; }) => {
  switch(action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {

  const [count, setCount] = useState(1);
  const ref = useRef<HTMLInputElement>(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSquare = () => {
    setCount(count * 2);
  };

  const handleRef = () => {
    console.log(ref.current?.value);
  };

  useEffect(() => {
    console.log("useEffectが実行されました");
  },[count]);

  return (
    <div className="App">
      <h1>useState・useEffect</h1>
      <p>2の乗数を増やす</p>
      <p>{count}</p>
      <button onClick={handleSquare}>＋</button>
      <hr />
      <div>
        <h1>useContext</h1>
        <ContextA />
      </div>
      <hr />
      <h1>useRef</h1>
      <input
        type="text"
        onChange={(e) => e.target.value}
        ref={ref}
      />
      <button onClick={handleRef}>Try useRef</button>

      <hr />
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({type: "increment"})}>＋</button>
      <button onClick={() => dispatch({type: "decrement"})}>ー</button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  );
}

export default App;
