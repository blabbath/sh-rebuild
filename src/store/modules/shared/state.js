/* INITIAL STATE */
const width = 512;
const height = 343.697;

export default () => ({
    inputModules: ['input'],
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
    geojson: [],
    image: 'image/jpeg',
    width: width,
    height: height,
    aspectRatio: height / width,
    imageURL: undefined,
    geometry: [],
    geometryCounter: 0,
});
