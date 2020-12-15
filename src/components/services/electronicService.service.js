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
        details: x.Descriere,
        label: x.Etichet
    });
};

const deleteElectronicService = (param) => {
    return axios.delete(API_URL + `${param}`);
};

const updateElectronicService = (param, x) => {
    return axios.put(API_URL +`${param}`, {
        name: x.Denumire,
        amount: x.Suma,
        treasureAccount: x.ContTrez,
        details: x.Descriere,
        label: x.Etichet
    });
};


export default {
    getListElectronicService,
    postNewElectronicService,
    deleteElectronicService,
    getElectronicServiceById,
    updateElectronicService
};
