/* INITIAL STATE */
export default () => ({
  maxCC: 10,
  mosaickingOrder: "leastCC",
  satellite: "sentinel-2-l2a",
  errorCount: 0,
  evalscript: `
      //VERSION=3
      function setup() {
        return {
          input: ["B02", "B03", "B04"],
          output: {
            bands: 3
          }
        };
      }

      function evaluatePixel(
        sample,
        scenes,
        inputMetadata,
        customData,
        outputMetadata
      ) {
        return [2.5 * sample.B04, 2.5 * sample.B03, 2.5 * sample.B02];
      }
  `,
  area: null,
  geojson: null,
});
