const express = require('express');

const app = express();

// Body parser, reading data from body into req.body
app.use(express.json());
