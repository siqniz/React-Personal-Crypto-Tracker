import React, { Component } from 'react';
import axios from '../../axios';

//css
import classes from './CoinViewer.css';


class CoinViewer extends Component {

    state = {
        coin: {},
        hasLoaded: false,
        id: ''
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.getCurrentCoin();
    }

    componentWillMount() {

    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        this.getCurrentCoin();
    }

    getCurrentCoin() {
        const _this = this;
        let _id = this.props.match.params.id.toUpperCase();

        if (_id != _this.state.id.toUpperCase()) {

            axios.get('/data/pricemultifull?fsyms=' + _id + '&tsyms=USD')
                .then(resp => {
                    let _currentcoin = { ...resp.data.RAW.BTC.USD, ticker: _id };
                    _this.setState({ id: _id, coin: _currentcoin });
                });
        }
    }


    render() {
        return (
            <div className={classes.CoinViewer}>
                <div className={classes.DisplayLabel}>
                    <div><label>Symbol: </label> {this.state.coin.ticker}</div>
                    <div><label>Price: </label> {this.state.coin.PRICE}</div>
                    <label>24H Volume:</label>
                </div>
            </div>
        )
    }

}

export default CoinViewer