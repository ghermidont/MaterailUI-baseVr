import axios from 'axios';
//import authHeader from './auth-header';
import Constants from './constants';

const API_URL = Constants.API_URL + 'api/Eservice/';

const getListElectronicService = () => {
    return axios.get(API_URL);
};

const getUsersByRole = (param) => {
    return axios.get(API_URL + 'GetUsersByRole', {
        params: {
            roleName: param
        }});
};

const getUserByEmail = (param1, param2) => {
    return axios.get(API_URL + 'GetUserByEmail', {
        params: {
            userEmail: param1,
            roleName: param2
        }});
};

const postToggleUserCityHallAdminRole = (UserEmail, Add) => {
    return axios.post(API_URL + 'ToggleUserCityHallAdminRole', {
        UserEmail,
        Add
    });
};


export default {
    getListElectronicService,

};
