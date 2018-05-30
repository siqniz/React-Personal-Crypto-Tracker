import React from 'react'
import { NavLink, withRouter, Route } from 'react-router-dom';

import Coin from '../componenets/CoinList/Coin/Coin';


const layout = (props) => (
    <div>
        <nav>
            <ul style={{ listStyleType: 'none' }}>
            <li style={{ display: 'inline-block', padding: '20px' }}><NavLink to='/'>Home </NavLink></li>
                <li style={{ display: 'inline-block', padding: '20px' }}><NavLink to='/btc'>BTC</NavLink ></li>
                <li style={{ display: 'inline-block', padding: '20px' }}><NavLink to='/trx'>TRX </NavLink></li>
            </ul>
        </nav>
        <Route path="/coin" component={Coin} />
    </div>
)

export default withRouter(layout);