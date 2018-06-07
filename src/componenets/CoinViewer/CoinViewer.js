import React, { Component } from 'react';
import axios from '../../axios';


class CoinViewer extends Component {

    state = {
        coin: {},
        hasLoaded: false,
        id: ''
    }

    componentDidMount() {
        //console.log('componentDidMount')
    }

    componentWillMount() {
        console.log('componentWillMount')
        //this.getCompleteCoinData();
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');

        if (this.props.match.params.id != this.state.id) {
            //this.getCompleteCoinData();
        }

    }

    componentDidUpdate() {
        if (this.props.match.params.id != this.state.id) {
            console.log('componentDidUpdate');
            //     //need to check for same props so we don't get 2x updates
            this.getCompleteCoinData();
        }
    }

    getCompleteCoinData() {
        let _id = this.props.match.params.id.toUpperCase();

        console.log(this.state.id);

        axios.get('/data/pricemultifull?fsyms=' + _id + '&tsyms=USD').then((resp) => {
            let _currentcoin = { ...resp.data.RAW.BTC.USD, ticker: _id };
            this.setState({ coin: _currentcoin, hasLoaded: true, id: _id });
            console.log(this.state.hasLoaded);
        });


    }


    render() {


        return (
            <div>
                CoinViewer Component: {this.state.id} sads
            </div>
        )
    }

}

export default CoinViewer