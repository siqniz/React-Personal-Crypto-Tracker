import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import CoinList from './componenets/CoinList/Coinlist'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
        <Route path="/" component={CoinList} />
      </div>
    );
  }
}

export default App;


//CoinList