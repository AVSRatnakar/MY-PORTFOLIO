const express = require('express');
const serverless = require('serverless-http');
const app = require('../app/app'); // Your Express app

const handler = serverless(app);

module.exports.handler = async (event, context) => {
  // You can do additional processing here if needed
  return await handler(event, context);
};
