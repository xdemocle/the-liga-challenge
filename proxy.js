/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 4000;
const HOST = 'localhost';
const API_SERVICE_URL = 'https://api.football-data.org/v4';

// Logging
app.use(morgan('dev'));

app.use(
  cors({
    origin: '*'
  })
);

// Info GET endpoint
app.get('/info', (req, res, next) => {
  res.send(
    'This is a proxy service which proxies to Billing and Account APIs.'
  );
});

// Proxy endpoints
app.use(
  '/v4',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      [`^/v4`]: ''
    }
  })
);

// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
