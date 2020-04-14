'use strict';

const supergoose = require('@code-fellows/supergoose');
const app = require('../lib/server.js');
const mockRequest = supergoose(app.server);
const products = require('../lib/models/product.js');


describe('API for products', () => {
  const test = {
    category: 'Test Category',
    name: 'Test',
    display_name: 'Test product',
    description: 'Test Product',
  };


  it('post a category', async () => {
    const testRecord = await mockRequest.post('/api/v1/products').send(test);
    expect(testRecord.statusCode).toBe(200);
    });

    it('can get all categories', async () => {
      await products.schema(test).save();
  
      const testResponse = await agent.get('/api/v1/products');
      expect(testResponse.statusCode).toBe(200);
  }); 
  });