import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

type Data = {
  name: string;
  age: number;
};

const data: Data = ({
  name: "jan",
  age: 33,
});

export const GiveData = createContext(data);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GiveData.Provider value={data}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GiveData.Provider>
);

export default GiveData;