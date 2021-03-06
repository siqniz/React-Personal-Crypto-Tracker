import React, { Component } from 'react';

//import CoinList from '../../componenets/CoinList/Coinlist'
import Coin from '../../componenets/CoinList/Coin/Coin';

//Services
import btcaxois from '../../axios'


class Coins extends Component {
    state = {
        btc: null,
        trx: null
    }

    componentDidMount() {
        console.log('will mount');
        this.getBTCData();
    }


    getBTCData() {
        btcaxois.get('/data/pricemultifull?fsyms=BTC&tsyms=USD').then((resp) => {
            let _btc = { ...resp.data.RAW.BTC.USD, ticker: 'BTC' };
            this.setState({ btc: { ..._btc } });
        });

    }

    render() {
        let _btccoin = <div> Bitcoin API didn't load correctly</div>
        let _btc = this.state.btc;


        return (
            <div>
                {_btccoin}
            </div>
        )
    }
}

export default Coins