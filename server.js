const express = require('express');
const compression = require('compression');
const path = require('path');


const server = express();

// Enable gzip compression
server.use(compression());

// Serve static files from 'public' folder
server.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html
server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const { inject } = require("@vercel/analytics");

// Initialize Vercel Analytics
inject();

// Your other application code here
console.log("Application is running with Vercel Analytics");

module.exports = server;
