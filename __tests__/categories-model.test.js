'use strict';

const supergoose = require('@code-fellows/supergoose');
const app = require('../lib/server.js');
const mockRequest = supergoose(app.server);
const categories = require('../lib/models/category.js');


describe('API for categories', () => {
  const test = {
    name: 'test',
    display_name: 'test name',
    description: 'test description',
  };


  it('post a category', async () => {
    const testRecord = await mockRequest.post('/api/v1/categories').send(test);
    expect(testRecord.statusCode).toBe(200);
    });

    it('can get all categories', async () => {
      await categories.schema(test).save();
  
      const testResponse = await agent.get('/api/v1/categories');
      expect(testResponse.statusCode).toBe(200);
  }); 
  });