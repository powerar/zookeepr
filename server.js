const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const fs = require('fs');

// provies utilties for working with file and directory paths
const path = require('path');

const express = require('express');

const { animals } = require('./data/animals.json');
const e = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

//static = middleware to serve the entire public folder when accessing the root
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// parse incoming string or array data
// extended: true means there may be nested arrays in the POST data
app.use(express.urlencoded({ extended: true }));

//parse incoming JSON data
app.use(express.json());

//get requires two arguments: first is a string that describes the route the client will fetch from, second is callback that will execute every time the route is accessed

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
