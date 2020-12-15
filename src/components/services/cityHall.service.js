import axios from 'axios';
import Constants from './constants';

const API_URL = Constants.API_URL + 'api/CityHall/';

const getListCityHall = () => {
    return axios.get(API_URL + 'getAllCityHall');
};

const getCityHallById = (param) => {
    return axios.get(API_URL + `${param}`);
};


const deleteCityHallById = (param) => {
    return axios.delete(API_URL + `${param}`);
};

const postNewCityHall = (x) => {
    return axios.post(API_URL,
        x
    );
};

const updateCityHall = (param, x) => {
    return axios.put(API_URL +`${param}`, x);
};



export default {
    getListCityHall,
    getCityHallById,
    deleteCityHallById,
    postNewCityHall,
    updateCityHall
};
