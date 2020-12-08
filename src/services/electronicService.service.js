import axios from 'axios';
import Constants from './constants';

const API_URL = Constants.API_URL + 'api/Eservice/';

const getListElectronicService = () => {
    return axios.get(API_URL);
};

const getElectronicServiceById = (param) => {
    return axios.get(API_URL + `${param}`);
};

const postNewElectronicService = (x) => {
    return axios.post(API_URL, {
        name: x.Denumire,
        amount: x.Suma,
        treasureAccount: x.ContTrez,
        details: x.Descriere
    });
};

const deleteElectronicService = (param) => {
    return axios.delete(API_URL + `${param}`);
};

const getUserByEmail = (param1, param2) => {
    return axios.get(API_URL + 'GetUserByEmail', {
        params: {
            userEmail: param1,
            roleName: param2
        }
    });
};


export default {
    getListElectronicService,
    postNewElectronicService,
    deleteElectronicService,
    getElectronicServiceById
};
