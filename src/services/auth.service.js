import axios from 'axios';
import Constants from './constants';

const API_URL = Constants.API_URL+'api/auth/';

const register = (Email, Password, ConfirmPassword) => {
    return axios.post(API_URL + 'register', {
        Email,
        Password,
        ConfirmPassword
    });
};

const login = (Email, Password) => {
    return axios
        .post(API_URL + 'login', {
            Email,
            Password,
        })
        .then((response) => {
            if (response.data.message) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem('user');
    window.location.reload();
};

const getCurrentUser = () => {
    const jwt = JSON.parse(localStorage.getItem('user'));
    return jwt ? JSON.parse(window.atob(jwt.message.split('.')[1])) : {};
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
