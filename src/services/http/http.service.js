import { store } from '../../store/store';

export const config = {
    BASE_URL: 'http://apitest.partsplusmore.com/',
};

export const getData = (url, key) => {
    return fetch(config[key] + url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': store.getState().login ? (store.getState().login.data ? `Bearer ${store.getState().login.data.token}` : '') : ''
        },
    }).then(res => res.json()).then(res => res).catch(err => console.log(err));
}

export const postData = (url, data) => {
    return fetch(config.BASE_URL + url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': store.getState().login ? (store.getState().login.data ? `Bearer ${store.getState().login.data.token}` : '') : ''
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(res => res).catch(err => {
        if (err.name === 'AbortError') return;
        throw err;
    });
};