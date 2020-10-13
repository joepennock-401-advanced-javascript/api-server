'use strict';

const supergoose = require('@code-fellows/supergoose');
const server = require('../lib/server.js');
const req = supergoose(server.app);

describe('Test suite for api error handlers', () => {

  it('Should return a 404 status code when a requested route is not found/does not exist.', async () => {

    let obj = {
      name: "test",
    };

    let res = await req.post('/bad').send(obj);
    expect(res.status).toEqual(404);
    
  });

  it('Should call console.log from inside of logger on each route call', async () => {

    let obj = {
      name: "test"
    };
    const spy = jest.spyOn(global.console, 'log').mockImplementation();
    
    let res = await req.post('/api/vi/products').send(obj);
    expect(spy).toHaveBeenCalled();
    
  });

  describe('Test suite for /category routes', () => {

    it('Can add a new category with a POST route', async () => {

      let obj = {
        name: 'test',
        display_name: 'test',
        description: 'test',
      };

      let res = await req.post('/api/v1/categories').send(obj);
      expect(res.status).toEqual(201);
      expect(res.body._id).toBeDefined();
      expect(res.body.name).toEqual('test');
      
    });

    it('Can get all categories on a GET route', async () => {

      let obj = {
        name: 'test',
        display_name: 'test',
        description: 'test',
      };

      let res = await req.get('/api/v1/categories').send(obj);
      expect(res.status).toEqual(200);
      expect(res.body[0]._id).toBeDefined();
      expect(res.body[0].name).toEqual('test');
      expect(res.body[1]).toBeUndefined();

    });
    
  });
  
});