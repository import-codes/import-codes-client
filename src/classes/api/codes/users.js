import CodesApi from "./codes-api";

export default class Users {
    static list(params, callback) {
        return CodesApi.ConfiguredAxios({
            method: 'get',
            url: '/user',
            params: params
        }).then(function (response) {
            callback(response);
        });
    }

    static get(id, callback) {
        return CodesApi.ConfiguredAxios({
            method: 'get',
            url: `/user/${id}`
        }).then(function (response) {
            callback(response);
        });
    }

    static store(data, callback) {
        return CodesApi.ConfiguredAxios({
            method: 'post',
            url: '/user',
            data: data
        }).then(function (response) {
            callback(response);
        });
    }

    static update(id, data, callback) {
        return CodesApi.ConfiguredAxios({
            method: 'patch',
            url: `/user/${id}`,
            data: data
        }).then(function (response) {
            callback(response);
        });
    }
}