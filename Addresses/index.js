
var _addressline = "";
var _validation = '';

module.exports = function (data, strType) {

    prettyAddress(data, strType);

    return _addressline;

}

function prettyAddress(obj, addressType) {

    var _result = '';
    _addressline = "";
    
    if (obj.length != undefined) {

        for (var i = 0; i < obj.length; i++)
            {
                _result = processObject(obj[i], addressType)

                if (_result != undefined) {

                    _addressline = _addressline + _result
        
                }
            }
            
    } else {

        _addressline = processObject(obj, addressType)

    }

}


function processObject(obj, addressType) {

    if (addressType != '') {

        if (obj.type.name != addressType) {

            return;
        }
        
    }    
    _validation = '';
    var _type = obj.type.name + ' - ';
    var _line1 = obj.addressLineDetail != null ? obj.addressLineDetail.line1 + ' - ' : '';
    var _line2 = obj.addressLineDetail != null ? obj.addressLineDetail.line2 + ' - ' : '';
    var _city = obj.cityOrTown + ' - ';
    var _postalCode = obj.postalCode + '-';
    var _prov_state = obj.provinceOrState != null ? obj.provinceOrState.name + ' - ' : '';
    var _country = obj.country.name + ' - ';
    var _country_code = obj.country.code + ' - ';
   

     //validate
    if(isNaN(obj.postalCode)){ 

        validationMsg('Postal Code must be numeric');

    }

    if(_country == ' - ' || ''){
 
        validationMsg('Country not specified');
            
    }

    if(_country_code == 'ZA' && (_prov_state == '' || _prov_state == ' - ')){
     
        validationMsg('Province is required')
    }


    if ((_line1 == '' || _line1 == ' - ') && (_line2 == '' || _line2 == ' - ')){

        validationMsg('Address Line not specified');

    }

    if (_validation != '')
        {
            return _validation + '\n';
        }

    return (_type + _line1 + _line2 + _city + _prov_state + _postalCode + _country) + "\n";

}

function validationMsg(strVal){

    if(_validation ==''){
        _validation += strVal;
    }else {
        _validation = '\n' + strVal;
    }  

}
