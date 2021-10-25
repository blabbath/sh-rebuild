export default {
  "sentinel-2-l2a": {
    cloudCoverage: true,
    mosaickingOrder: [
      { name: "most Recent", value: "mostRecent" },
      { name: "least Recent", value: "leastRecent" },
      { name: "least Cloud Cover", value: "leastCC" },
    ],
  },
  "sentinel-2-l1c": {
    cloudCoverage: true,
    mosaickingOrder: [
      { name: "most Recent", value: "mostRecent" },
      { name: "least Recent", value: "leastRecent" },
      { name: "least Cloud Cover", value: "leastCC" },
    ],
  },
  "landsat-ot-l1": {
    cloudCoverage: true,
    mosaickingOrder: [
      { name: "most Recent", value: "mostRecent" },
      { name: "least Recent", value: "leastRecent" },
      { name: "least Cloud Cover", value: "leastCC" },
    ],
  },
  "landsat-ot-l2": {
    cloudCoverage: true,
    mosaickingOrder: [
      { name: "most Recent", value: "mostRecent" },
      { name: "least Recent", value: "leastRecent" },
      { name: "least Cloud Cover", value: "leastCC" },
    ],
  },
  "landsat-tm-l1": {
    cloudCoverage: true,
    mosaickingOrder: [
      { name: "most Recent", value: "mostRecent" },
      { name: "least Recent", value: "leastRecent" },
      { name: "least Cloud Cover", value: "leastCC" },
    ],
  },
  "landsat-tm-l2": {
    cloudCoverage: true,
    mosaickingOrder: [
      { name: "most Recent", value: "mostRecent" },
      { name: "least Recent", value: "leastRecent" },
      { name: "least Cloud Cover", value: "leastCC" },
    ],
  },
  "landsat-mss-l1": {
    cloudCoverage: true,
    mosaickingOrder: [
      { name: "most Recent", value: "mostRecent" },
      { name: "least Recent", value: "leastRecent" },
      { name: "least Cloud Cover", value: "leastCC" },
    ],
  },
  "landsat-etm-l1": {
    cloudCoverage: true,
    mosaickingOrder: [
      { name: "most Recent", value: "mostRecent" },
      { name: "least Recent", value: "leastRecent" },
      { name: "least Cloud Cover", value: "leastCC" },
    ],
  },
  "landsat-etm-l2": {
    cloudCoverage: true,
    mosaickingOrder: [
      { name: "most Recent", value: "mostRecent" },
      { name: "least Recent", value: "leastRecent" },
      { name: "least Cloud Cover", value: "leastCC" },
    ],
  },
  modis: {
    cloudCoverage: false,
    mosaickingOrder: [
      { name: "most Recent", value: "mostRecent" },
      { name: "least Recent", value: "leastRecent" },
    ],
  },
  dem: { cloudCoverage: false, mosaickingOrder: false },
  "sentinel-3-olci": {
    cloudCoverage: false,
    mosaickingOrder: [
      { name: "most Recent", value: "mostRecent" },
      { name: "least Recent", value: "leastRecent" },
    ],
  },
  "sentinel-1-grd": {
    cloudCoverage: false,
    mosaickingOrder: [
      { name: "most Recent", value: "mostRecent" },
      { name: "least Recent", value: "leastRecent" },
    ],
  },
  "sentinel-3-slstr": {
    cloudCoverage: true,
    mosaickingOrder: [
      { name: "most Recent", value: "mostRecent" },
      { name: "least Recent", value: "leastRecent" },
      { name: "least Cloud Cover", value: "leastCC" },
    ],
  },
  "sentinel-5p-l2": {
    cloudCoverage: false,
    mosaickingOrder: [
      { name: "most Recent", value: "mostRecent" },
      { name: "least Recent", value: "leastRecent" },
    ],
  },
};
