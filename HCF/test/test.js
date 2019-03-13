var assert = require('chai').assert;
var mocha = require('mocha');
var numbers = require('../index');


var arr1 = "";
var arr = "";

describe('1. Numbers', function(){
    it('Should return Not object', function(){
        assert.include(numbers(arr1), "Not object");
    })
})

arr = [12,15,3,7]

describe('2. Numbers', function(){
    it('Should return HCD', function(){
        assert.equal(numbers(arr), 3);
    })
})