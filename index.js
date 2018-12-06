const express = require('express');
const app = express();
const router = require('./config/router');
const { port, dbURI } = require('./config/environment');
const bodyParser = require('body-parser');


const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

app.use(bodyParser.json());


// app.use(express.static(`${__dirname}/public`));

// app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));


app.use('/api', router);


app.listen(port, () => console.log(`Express is listening on port ${port}`));
