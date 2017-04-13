const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');

const paths = {
  public: path.resolve(__dirname, '../public'),
  build: path.resolve(__dirname, '../build'),
  index: path.resolve(__dirname, '/../client/index.html'),
  logs: path.resolve(__dirname, 'access.log'),
};

const app = express();

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(paths.logs, { flags: 'a' });

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

app.use('/', express.static(paths.build));
app.use('/', express.static(paths.public));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
