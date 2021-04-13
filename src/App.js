import React from 'react';
import './App.scss'
import Header from './components/Header/Header'
import Asteroids from './components/Asteroids/Asteroids'
import Footer from './components/Footer/Footer'
import DestroyBasket from './components/DestroyBasket/DestroyBasket'
import { AsteroidProvider } from "./providers/AsteroidProvider";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (<>
    <Switch>
      <AsteroidProvider>
        <Header />
        <Route exact path="/" exact component={Asteroids} />
        <Route path="/destroy" component={DestroyBasket} />
        <Redirect to="/" />
        <Footer />
      </AsteroidProvider>
    </Switch>
  </>
  );
}

export default App;
