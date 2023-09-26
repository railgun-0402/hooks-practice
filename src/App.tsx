import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react';
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

  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  const result01 = () => setCount01(count01 + 1);
  const result02 = () => setCount02(count02 + 1);

  const square = useMemo(() => {
    let i = 0;
    while (i < 200000000) {
      i++;
    }
    return count01 * count01 * count01;
  }, [count01]);

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

      <hr />
      <h1>useMemo</h1>
      <div>result01: {count01}</div>
      <div>result02: {count02}</div>
      <div>結果：{square}</div>
      <button onClick={result01}>increment01</button>
      <button onClick={result02}>increment02</button>
    </div>
  );
}

export default App;
