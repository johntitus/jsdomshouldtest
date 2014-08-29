var should = require('should'),
	env = require("jsdom").env,
	request = require('request');

describe('Get Google', function(){
	before( function( done ){
		request.get("https://www.google.com", function( err, res, body ){
			if ( err ){
				throw err;
			} else {
				env(body, function (errors, window) {
					if ( errors ){
						throw errors;
					} else {
						var $ = require('jquery')(window);
						hasBody = ($("span#body").length == 1);
						
					}
				});
			}
		});
	});

	it('should have a body', function(){
		hasBody.should.be.true;
	});
});