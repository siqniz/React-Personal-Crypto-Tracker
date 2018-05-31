import React from 'react';
import { NavLink, withRouter, Route } from 'react-router-dom';

import classes from './Layout.css';

import Coin from '../componenets/CoinList/Coin/Coin';


const layout = (props) => (
    <div className={classes.Layout}>
        <nav>
            <ul >
                <li ><NavLink to='/'>Home </NavLink></li>
                <li ><NavLink to='/btc'>BTC</NavLink ></li>
                <li ><NavLink to='/trx'>TRX </NavLink></li>
            </ul>
        </nav>
        <Route path="/coin" component={Coin} />
    </div>
)

export default layout;

//style={{ listStyleType: 'none' }}
//style={{ display: 'inline-block', padding: '20px' }}
// {{ display: 'inline-block', padding: '20px' }}
// {{ display: 'inline-block', padding: '20px' }}