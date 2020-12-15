import axios from 'axios';
import Constants from './constants';

const API_URL = Constants.API_URL + 'api/BankAccount';

const getListIban = (x) => {
    return axios.get(API_URL , {
        params: {
            SearchTerm: x
        }
    });
};


export default {
    getListIban
};
