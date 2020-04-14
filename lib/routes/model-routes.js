'use strict';

//esoteric resources
const express = require('express');
const router = express.Router();

//internal modules
const modelFinder = require('../middleware/model-finder.js');


//middleware
router.param('model', modelFinder);



//routes
/**
 * This route gets you the categories list
 * @route GET /categories
 * @group categories
 * @returns {array} 200 - The array of categories objects
 * @returns {Error} - When unable to get data
 */
router.get('/:model', async (req, res, next) => {
    let results = await req.colModel.readByQuery({});
    let output = {
        count : results.length,
        results : results,
    }

    res.status(200).send(output);
});

/**
 * This route gets you the categories list
 * @route GET /categories/:id
 * @group categories
 * @param {Number} id.params.required - record with id to find
 * @returns {array} 200 - The array of categories objects
 * @returns {Error} - When unable to get data
 */

router.get('/:model/:id', async (req, res, next) => {
    let result = await req.colModel.read(req.params.id);

    res.status(200).send(result);
});

/**
 * This route allows you to create a category
 * @route POST /categories
 * @group categories
 * @returns {object} 201 - The created objectNew categories object
 * @returns {Error} - When unable to create data
 */
router.post('/:model', async (req, res, next) => {
    let result = await req.colModel.create(req.body);
    res.status(201).send(result);
});

/**
 * This route allows you to update a category
 * @route PUT /categories/:id
 * @group categories
 * @param {Number} id.params.required - id to update
 * @returns {object} 200 - Updated data
 * @returns {Error} - Unable to update data
 */

router.put('/:model/:id', async (req, res, next) => {
   let result = await req.colModel.update(req.params.id,req.body);
   res.status(200).send(result);
});

/**
 * This route allows you to delete a category
 * @route DELETE /categories/:id
 * @group categories
 * @param {Number} id.params.required - id to delete
 * @returns {object} 200
 * @returns {Error} - Unable to delete
 */

router.delete('/:model/:id', async (req, res, next) => {
   let record = await req.colModel.delete(req.body);
   res.status(200).send(record);
});

module.exports = router;