import axios from 'axios';
import Constants from './constants';

const API_URL = Constants.API_URL + 'api/Iban';

const getListIban = (x) => {
    return axios.get(API_URL , {
        params: {
            FilterOptions: x
        }
    });
};


export default {
    getListIban
};
