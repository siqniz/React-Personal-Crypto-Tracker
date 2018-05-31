import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Coin from './Coin/Coin';
import classes from './Coinlist.css';
import btcaxois from '../../axios'
import Form from '../Forms/Forms'


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
                    <NavLink key={coin} to={'/' + coin}>
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
                    Individal coins will display on this planel
                </div>
            </div>
        );
    }
}

export default CoinList;