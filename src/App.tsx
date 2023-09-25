import React, { useEffect, useState } from 'react';
import './App.css';
import ContextA from './components/ContextSample/ContextA';

function App() {

  const [count, setCount] = useState(1);

  const handleSquare = () => {
    setCount(count * 2);
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
    </div>
  );
}

export default App;
