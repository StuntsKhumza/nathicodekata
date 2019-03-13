let app = require('../index');

let assert = require('chai').assert;

//test
describe('App', ()=>{

    it('Should return 0 if empty string is passed', ()=>{
        assert.equal(app(''), 0);
    })

    it('Should return 0 if empty string is passed', ()=>{
        assert.equal(app(''), 0);
    })

    it('Should return 1 number if 1 param sent', ()=>{
        assert.equal(app('5'), 5);
    })

    it('Should return 6 if 1,2,3 sent', ()=>{
        assert.equal(app('1,2,3'), 6);
    })

    it('Should return 6 if 1,2\n3 sent', ()=>{
        assert.equal(app('1,2,3'), 6);
    })

    it('Should return Not valid if 1\n sent', ()=>{
        assert.equal(app('1\n'), 'Not valid');
    })

    it('Should return Not valid if 1, sent', ()=>{
        assert.equal(app('1,'), 'Not valid');
    })

    it('Should return 3 number if //;\n1;2 sent', ()=>{
        assert.equal(app('//;\n1;2'), 3);
    })

    it('Should return negatives not allowed: -22 if 1,-22,42\n5, sent', ()=>{
        
        assert.equal(app('1,-22,42\n5'), 'negatives not allowed');
        
    })

    it('Should return negatives not allowed: -22;-42 if 1,-22,-42\n5, sent', ()=>{
        
        assert.equal(app('1,-22,-42\n5'), 'negatives not allowed: -22;-42');
        
    })
})