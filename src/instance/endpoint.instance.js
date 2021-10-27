import axios from 'axios';
import qs from 'qs';

const client_id = '05198292-2fdd-4070-a2a0-2388d9c64546';
const client_secret = '^Y>zD,H}w~b:J{jA@FU<ir58f4Y)a9yW4XRduQ]s';

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
instance.post('/oauth/token', body, config).then((resp) => {
    Object.assign(instance.defaults, {
        headers: { authorization: `Bearer ${resp.data.access_token}` },
    });
});

export default instance;
