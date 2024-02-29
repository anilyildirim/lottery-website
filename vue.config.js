const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/graphql": {
        target: "http://localhost:8080", // Change to your local server address
        changeOrigin: true,
      },
    },
  },
});
