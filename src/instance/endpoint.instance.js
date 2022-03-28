import axios from 'axios';
import qs from 'qs';

const client_id = import.meta.env.VITE_SENTINEL_CLIENT_ID;
const client_secret = import.meta.env.VITE_SENTINEL_CLIENT_SECRET;
const instance = axios.create({
    baseURL: 'https://services.sentinel-hub.com',
});

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
};

const body = qs.stringify({
    client_id,
    client_secret,
    grant_type: 'client_credentials',
});

// All requests using this instance will have an access token automatically added
instance
    .post('/oauth/token', body, config)
    .then((resp) => {
        Object.assign(instance.defaults, {
            headers: { authorization: `Bearer ${resp.data.access_token}` },
        });
    })
    .catch((e) => console.error(e));

export default instance;
