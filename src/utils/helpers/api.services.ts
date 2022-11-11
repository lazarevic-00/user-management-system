import axios, {AxiosResponse} from 'axios';

const defaultOptions = {
    headers: {
        'Content-Type': 'application/json',
        accept: 'text/html',
    },
};

export const instance = axios.create(defaultOptions);

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token') ?? "";
    if (config.headers) {
        config.headers.Authorization = token ? `Bearer ${token}` : ''
    }
    return config;
});

const responseBody = (response: AxiosResponse) => response.data;
const rejectResponse = (arg: string) => Promise.reject(arg);

export const requests = {
    get: (url: string, params?: {}) =>
        instance
            .get(url, {params})
            .then(responseBody)
            .catch((e) => {
                throw e;
            }),
    post: (url: string, body: {}) =>
        instance
            .post(url, body)
            .then(responseBody, rejectResponse)
            .catch((e) => {
                throw e;
            }),
    put: (url: string, body?: {}) =>
        instance
            .put(url, body)
            .then(responseBody)
            .catch((e) => {
                throw e;
            }),
    patch: (url: string, body: {}) =>
        instance
            .patch(url, body)
            .then(responseBody)
            .catch((e) => {
                throw e;
            }),
    delete: (url: string) =>
        instance
            .delete(url)
            .then(responseBody)
            .catch((e) => {
                throw e;
            }),
};
