'use strict';

const categorySchema = ('../models/categories-schema.js');
const productSchema = ('../models/products-schema.js');
const Model = ('../models/model.js');


const modelFinder = (req,res,next) => {
    console.log('found model', req.params.model);
   
    switch (req.params.model) {
        case 'products':
            console.log('Found model products');
            req.colModel = new Model(productSchema);
            next();
            break;
        case 'categories':
            console.log('Found model categories');
            req.colModel = new Model(categorySchema);
            next();
            break;
        default:
            console.log('Invalid model');
            res.status(404);
            res.end();
            break;
    }
};

module.exports = modelFinder;