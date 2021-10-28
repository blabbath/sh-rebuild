import mosaickingOrder from './mosaickingOrder';
import mosaickingOrderClouds from './mosaickingOrderClouds';
import upsampling from './upsampling';
import downsampling from './downsampling';
import tiers from './tiers';
import orbitDirection from './orbitDirection';

export default {
    'sentinel-2-l2a': {
        date: true,
        cloudCoverage: true,
        mosaickOrder: mosaickingOrderClouds,
        upsampling,
        downsampling,
    },
    'sentinel-2-l1c': {
        date: true,
        cloudCoverage: true,
        mosaickOrder: mosaickingOrderClouds,
        upsampling,
        downsampling,
    },
    'landsat-ot-l1': {
        date: true,
        cloudCoverage: true,
        mosaickOrder: mosaickingOrderClouds,
        upsampling,
        downsampling,
        tiers,
    },
    'landsat-ot-l2': {
        date: true,
        cloudCoverage: true,
        mosaickOrder: mosaickingOrderClouds,
        upsampling,
        downsampling,
        tiers,
    },
    'landsat-tm-l1': {
        date: true,
        cloudCoverage: true,
        mosaickOrder: mosaickingOrderClouds,
        upsampling,
        downsampling,
        tiers,
    },
    'landsat-tm-l2': {
        date: true,
        cloudCoverage: true,
        mosaickOrder: mosaickingOrderClouds,
        upsampling,
        downsampling,
        tiers,
    },
    'landsat-mss-l1': {
        date: true,
        cloudCoverage: true,
        mosaickOrder: mosaickingOrderClouds,
        upsampling,
        downsampling,
        tiers,
    },
    'landsat-etm-l1': {
        date: true,
        cloudCoverage: true,
        mosaickOrder: mosaickingOrderClouds,
        upsampling,
        downsampling,
        tiers,
    },
    'landsat-etm-l2': {
        date: true,
        cloudCoverage: true,
        mosaickOrder: mosaickingOrderClouds,
        upsampling,
        downsampling,
        tiers,
    },
    modis: {
        date: true,
        mosaickOrder: mosaickingOrder,
        upsampling,
        downsampling,
    },
    dem: {
        upsampling,
        downsampling,
        demInstance: [
            { name: 'Mapzen', value: 'MAPZEN' },
            { name: 'Copernicus 30/90m DEN', value: 'COPERNICUS_30' },
            { name: 'Copernicus 90m DEN', value: 'COPERNICUS_90' },
        ],
        clampNegative: true,
        egm: true,
    },
    'sentinel-1-grd': {
        date: true,
        mosaickOrder: mosaickingOrder,
        upsampling,
        downsampling,
        orbitDirection,
    },
    'sentinel-3-olci': {
        date: true,
        mosaickOrder: mosaickingOrder,
        upsampling,
        downsampling,
    },
    'sentinel-3-slstr': {
        date: true,
        cloudCoverage: true,
        mosaickOrder: mosaickingOrderClouds,
        upsampling,
        downsampling,
        orbitDirection,
    },
    'sentinel-5p-l2': {
        date: true,
        mosaickOrder: mosaickingOrder,
        upsampling,
        downsampling,
        minQa: true,
    },
};
