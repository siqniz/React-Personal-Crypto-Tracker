import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import Coin from './Coin/Coin';

import classes from './Coinlist.css';

import btcaxois from '../../axios'


class CoinList extends Component {

    state = {
        coins: {
            btc: null,
            trx: null
        },
        isLoaded: false
    }

    componentDidMount() {
        btcaxois.get('/data/pricemultifull?fsyms=BTC&tsyms=USD').then((resp) => {
            let _btc = { btc: { ...resp.data.RAW.BTC.USD, ticker: 'BTC' } };
            this.setState({ coins: { btc: { ..._btc, key: 'BTC' } } });
            this.setState({ isLoaded: true });
        });
    }

    render() {

        let coins = <div>Loading...</div>
        let _statecoin = this.state.coins;

        if (this.state.isLoaded) {
            coins = Object.keys(this.state.coins).map((coin) => {
                return (
                    <NavLink key={coin} to={'/' + coin}>
                        <Coin
                            price={_statecoin[coin].btc.PRICE}
                            ticker={coin} />
                    </NavLink>
                )
            });
        }

        console.log(coins);

        return (
            <div className={classes.Coinlist}>
                {coins}
            </div>
        );
    }
}

export default CoinList;