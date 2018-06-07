import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import Coin from './Coin/Coin';
import classes from './Coinlist.css';
import btcaxois from '../../axios';
import Form from '../Forms/Forms';
import COINS from '../../coins';
import CoinViewer from '../CoinViewer/CoinViewer';

class CoinList extends Component {


    state = {
        formdata: {
            search: {
                elementtype: 'input',
                elementconfig: {
                    placeholder: 'search'
                }
            }
        },
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

        let _mycoins = COINS.map((coinid) => {
            btcaxois.get('/' + coinid).then((resp) => {
                console.log(resp);
            });
        });
    }

    render() {

        //xforms
        let formkeys = Object.keys(this.state.formdata);

        //this is NOT a deep copy
        let formdatacopy = this.state.formdata;
        let forminputs = formkeys.map((data) => {
            return (
                <Form
                    key={formdatacopy[data].elementtype}
                    formtype={data.elementtype}
                    htmlprops={formdatacopy[data].elementconfig} />
            )
        });

        let coins = <div>Loading...</div>
        let _statecoin = this.state.coins;

        if (this.state.isLoaded) {
            coins = Object.keys(this.state.coins).map((coin) => {
                return (
                    <NavLink key={coin} to={{
                        pathname: '/' + coin
                    }}>
                        <Coin
                            price={_statecoin[coin].btc.PRICE}
                            ticker={coin} />
                    </NavLink>
                )
            });
        }

        return (
            <div className={classes.Coinlist}>
                <div className={classes.Threepanel}>
                    {forminputs}
                </div>
                <div className={classes.Threepanel}>
                    {coins}
                </div>
                <div className={classes.Threepanel}>
                    <Route path="/:id" component={CoinViewer} />
                </div>
            </div>
        );
    }
}

export default CoinList;