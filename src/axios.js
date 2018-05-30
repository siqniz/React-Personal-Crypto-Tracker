import axios from 'axios';

const btcaxois = axios.create({
    baseURL: 'https://api.cointrend.club'
});

export default btcaxois;