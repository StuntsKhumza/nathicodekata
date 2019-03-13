var app = require('../index');
var assert = require('chai').assert;

var data = [
    {
        "id": "1",
        "type": {
            "code": "1",
            "name": "Physical Address"
        },
        "addressLineDetail": {
            "line1": "Address 1",
            "line2": "Line 2"
        },
        "provinceOrState": {
            "code": "5",
            "name": "Eastern Cape"
        },
        "cityOrTown": "City 1",
        "country": {
            "code": "ZA",
            "name": "South Africa"
        },
        "postalCode": "1234",
        "lastUpdated": "2015-06-21T00:00:00.000Z"
    },
    {
        "id": "2",
        "type": {
            "code": "2",
            "name": "Postal Address"
        },
        "cityOrTown": "City 2",
        "country": {
            "code": "LB",
            "name": "Lebanon"
        },
        "postalCode": "2345",
        "lastUpdated": "2017-06-21T00:00:00.000Z"
    },
    {
        "id": "3",
        "type": {
            "code": "5",
            "name": "Business Address"
        },
        "addressLineDetail": {
            "line1": "Address 3",
            "line2": ""
        },
        "cityOrTown": "City 3",
        "country": {
            "code": "ZA",
            "name": "South Africa"
        },
        "postalCode": "345d6",
        "suburbOrDistrict": "Suburb 3",
        "lastUpdated": "2018-06-13T00:00:00.000Z"
    }
]


var result = '';

//test 1
describe('1. App', ()=>{
    it('Return 1 address', ()=>{        

        var result = app(data[0], '');
        assert.include(result, ['Address 1']);
        console.log(result)

    })
})

describe('2. App', ()=>{
    it('Return All Addresses', ()=>{
        var result = app(data, '');
        assert.include(app(data, ''), 'Address 1');
        console.log(result);
    })
})

describe('3. App', ()=>{
    it('Return address where type = Physical Address', ()=>{
        var result = app(data, 'Physical Address');
        assert.include(result, 'Eastern Cape');
        console.log(result);
    })
})

describe('4. App', ()=>{
    it('Return Postal Code must be numeric', ()=>{
        var result = app(data[2], '');
        assert.include(result, 'Postal Code must be numeric');
        console.log(result);
    })
})
/*
//should fail if country obj not set

describe('7. App', ()=>{
    it('Return invalid address if country is empty', ()=>{
        assert.include(app(data[3], ''), 'Country is not valid');
    })
})

describe('8. App', ()=>{
    it('Return invalid address if country name is not set', ()=>{
        assert.include(app(data[2], ''), 'Country name not set');
    })
})


describe('9. App', ()=>{
    it('Return at least one address line that is not blank', ()=>{
        assert.include(app(data[3], ''), 'AddressLine Object is not set');
    })
})

describe('10. App', ()=>{
    it('Return AddressLines not set', ()=>{
        assert.include(app(data[4], ''), 'AddressLines not set');
    }) 
})*/
