const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/proxy", createProxyMiddleware({
  target: "https://example.com", // change this to the site you want
  changeOrigin: true,
  pathRewrite: { "^/proxy": "" },
}));

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
