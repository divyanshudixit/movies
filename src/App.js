import logo from './logo.svg';
import React, { Component }  from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Favourites from './Components/Favourites';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import {BrowserRouter as Router,Switch,Route, BrowserRouter, Routes} from 'react-router-dom';
// import { Routes ,Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact render={(props)=>(
        <>
          <Banner {...props}/>
          <Movies {...props}/>
        </>
      )}/>
      <Route path='/favourites' component={Favourites} />
    </Switch>
  </Router>

  

  );
}

export default App;
