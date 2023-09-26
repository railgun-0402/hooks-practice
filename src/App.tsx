import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import ContextA from './components/ContextSample/ContextA';

function App() {

  const [count, setCount] = useState(1);
  const ref = useRef<HTMLInputElement>(null);

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
    </div>
  );
}

export default App;
