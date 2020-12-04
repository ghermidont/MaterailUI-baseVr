import axios from 'axios';

//const API_URL = 'https://localhost:5001/api/auth/';
const API_URL = 'https://d3d6bc7f-ab29-4061-86af-8ed2a1f047bf.mock.pstmn.io/api/auth/';
//const API_URL = "http://localhost:8080/api/auth/";

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
