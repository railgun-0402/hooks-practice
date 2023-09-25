import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(1);

  const handleSquare = () => {
    setCount(count * 2);
  };

  return (
    <div className="App">
      <h1>useContext</h1>
      <p>2の乗数を増やす</p>
      <p>{count}</p>
      <button onClick={handleSquare}>＋</button>
    </div>
  );
}

export default App;
