module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },

  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: (tag) => /^cds-/.test(tag),
        };
        return options;
      });
  },

  css: {
    requireModuleExtension: true,
    extract: process.env.NODE_ENV !== "production" ? false : true,
  },

  lintOnSave: true,
};
