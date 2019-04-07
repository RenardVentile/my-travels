import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Trip</h1>
        </header>
        <Travel
          destination="Lac du Salagou"
          country="France"
          photo="http://ahahh.blog.lemonde.fr/files/2009/11/salagou-2007-019.1257186982.jpg"
          distance="231 km"
        />
        <Travel
          destination="Nîmes"
          country="France"
          photo="https://www.lesedc.org/wp-content/uploads/2017/06/2015-Maison-Carr%C3%A9e-N%C3%AEmes.jpg"
          distance="291 km"
        />
      </div>
    );
  }
}

export default App;
