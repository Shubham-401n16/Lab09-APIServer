'use strict';
const express = require('express');
const generateSwagger = require('../docs/swagger.js');
const cors = require('cors');
const morgan = require('morgan');
const notFoundHandler = require('../lib/middleware/404.js');
const errorHandler = require('../lib/middleware/500.js');
const logger = require('../lib/middleware/logger.js');
const modelRouter = require('./routes/model-routes.js');


const app = express();


generateSwagger(app);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(logger);
//app.use(modelFinder);


/**
 * This is the homepage
 * @route GET /
 * @returns {object} 200 
 */

app.get('/', (req,res,next)=> {
    res.status(200).send('Homepage for API Server');
});

 app.use('/api/v1/', modelRouter);

 // because these are defined last, they end up as catch-alls.
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    //exporting app for testing
    apiServer: app,
    start: (port) => {
        app.listen(port, () => console.log(`Listening on ${port}`));
    }
};