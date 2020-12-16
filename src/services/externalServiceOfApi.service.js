import axios from 'axios';
import Constants from './constants';

const API_URL = Constants.API_URL + 'api/ExternalService/';

const getExchange = () => {
    return axios.get(API_URL+'exchangeRate');
};
export default {
    getExchange,
};
