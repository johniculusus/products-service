// Simple async test for HTTP 200 response code using supertest
'use strict';

var request = require("supertest"),
    app = require("../server").getApp;

describe('GET /api/products', function(){
  it('expects HTTP response 200', function(done){
    request(app)
     .get('/api/products')
	 .expect(200, done); 
  });
});