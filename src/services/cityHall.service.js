import axios from 'axios';
import Constants from './constants';

const API_URL = Constants.API_URL + 'api/CityHall/';

const getListCityHall = () => {
    return axios.get(API_URL + 'getAllCityHall');
};

const getCityHallById = (param) => {
    return axios.get(API_URL + `${param}`);
};




export default {
    getListCityHall,
    getCityHallById
};
