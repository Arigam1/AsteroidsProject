import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { AsteroidProvider } from "./providers/AsteroidProvider";
import { DestroyProvider } from "./providers/DestroyProvider";

ReactDOM.render(
  <HashRouter>
    <AsteroidProvider>
      <DestroyProvider>
        <App />
      </DestroyProvider>
    </AsteroidProvider>
  </HashRouter>,
  document.getElementById('root')
);
