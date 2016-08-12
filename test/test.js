// Simple async test for HTTP 200 response code using supertest
'use strict';

var request = require("supertest"),
    app = require("../server").getApp;

describe('GET /api/products', function(){
  it("returns status 200", function() {
    request('/api/products', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });
});