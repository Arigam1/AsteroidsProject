import React from 'react';
import './App.scss'
import Header from './components/Header/Header'
import Asteroids from './components/Asteroids/Asteroids'
import Footer from './components/Footer/Footer'
import DestroyBasket from './components/DestroyBasket/DestroyBasket'
import { Redirect, Route, Switch } from "react-router-dom";
import AsteroidInfo from "./components/Asteroids/AsteroidInfo/AsteroidInfo"

function App() {
  return (<>
    <Header />
    <Switch>
      <Route path="/" exact render={() => <Asteroids />} />
      {/* <Route path="/asteroid/:id" render={() => <AsteroidInfo />} />
      <Route path="/destroy" render={() => <DestroyBasket />} /> */}
      <Redirect to="/" />
    </Switch>
    <Footer />
  </>
  );
}

export default App;
