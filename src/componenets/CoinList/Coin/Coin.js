import React from 'react';

const coin = (props) => (
    <div>
        <div style={{display:'inline-block', padding: '5px'}}>Ticker: {props.ticker.toUpperCase()}</div>
        <div style={{display:'inline-block', padding: '5px'}}>Price: {props.price}</div>
    
    </div>
);

export default coin