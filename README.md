# sh-app

## Project setup

```
npm install
```

### Environment Variables

Put your Client ID and Client Secret obtained from Sentinel Hub <br>
[(see this)](https://docs.sentinel-hub.com/api/latest/api/overview/authentication/)
into a `.env.local` file on the top-level project foldes like this:<br>

> VITE_SENTINEL_CLIENT_ID='YOUR_CLIENT_ID'<br>
> VITE_SENTINEL_CLIENT_SECRET='YOUR_CLIENT_SECRET'

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
cross-env NODE_ENV=production vite build
```
