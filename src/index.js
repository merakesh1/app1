import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/* import CounterContext from "./Contexts/CounterContext";
import Home from './components/Home'; */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/*  <CounterContext>
      <Home />
      <App />
    </CounterContext> */}
    <App />
  </>
)