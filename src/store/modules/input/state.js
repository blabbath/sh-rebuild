/* INITIAL STATE */
export default () => ({
    namespace: 'input',
    maxCC: 20,
    mosaickingOrder: 'mostRecent',
    satellite: 'sentinel-2-l2a',
    upsampling: 'NEAREST',
    downsampling: 'NEAREST',
    dateMin: '2018-01-01',
    dateMax: '2020-08-31',
    tiers: 'ALL_TIERS',
    identifier: null,
    demInstance: 'MAPZEN',
    egm: false,
    clampNegative: false,
    orbitDirection: 'ASCENDING',
    minQa: 50,
});
