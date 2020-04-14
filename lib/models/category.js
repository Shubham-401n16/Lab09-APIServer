'use strict';

const schema = require('./categories-schema.js');
const dataModel =  require('./model.js');

class Category extends dataModel { }

module.exports = new Category(schema);