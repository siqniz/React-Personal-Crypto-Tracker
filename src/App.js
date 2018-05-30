import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import CoinList from './componenets/CoinList/Coinlist'
import BTC from './containers/BTC/BTC';
import TRX from './containers/TRX/TRX';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
          <Route path="/" exact component={CoinList} />
           <Route path="/BTC" component={BTC} />
           <Route path="/TRX" component={TRX} />
      </div>
    );
  }
}

export default App;


//CoinList