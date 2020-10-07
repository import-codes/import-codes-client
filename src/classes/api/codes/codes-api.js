import Users from './users';

const axios = require('axios');

export const CODES_API_URL = process.env.REACT_APP_CODES_API_URL

export default class CodesApi {
    static ConfiguredAxios = axios.create({
        baseURL: CODES_API_URL
    });

    static get Users() {
        return Users;
    }

    static implodeParameters(params) {
        let parameters = Object.keys(params).map(key => {
            return `${key}=${params[key]}`;
        })

        return parameters.join('&');
    }
}
