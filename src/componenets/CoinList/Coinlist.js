import React, { Component } from 'react';
import Coin from './Coin/Coin';

import btcaxois from '../../axios'


class CoinList extends Component {

    state = {
        coins: {
            btc: null,
            trx: null
        },
        isLoaded: false
    }

    componentDidMount(){
        btcaxois.get('/data/pricemultifull?fsyms=BTC&tsyms=USD').then((resp) => {
            let _btc = { btc :{...resp.data.RAW.BTC.USD, ticker: 'BTC' }};
            this.setState({ coins: {btc: { ..._btc, key: 'BTC' } }});
            this.setState({isLoaded: true});
        });

    }


    render() {

        let coins = <div>Loading...</div>
        let _statecoin = this.state.coins;

        if(this.state.isLoaded){
        coins = Object.keys(this.state.coins).map((coin) => {
            console.log(coin);
            console.log(_statecoin[coin].btc.PRICE);
             return (
                 <Coin
                     key={coin}
                     price={_statecoin[coin].btc.PRICE}
                     ticker={coin} />
             )
        });
    }

        console.log(coins);

        return (
            <div>
                {coins}
            </div>
        );
    }
}

export default CoinList;