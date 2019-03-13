module.exports = function (strVal) {

    var reg_numbersOnly = /\-*\d/g;
    var negative_number_reg = /\-[(1-9)]*/g;
    var values = '';
    var neg_values = '';
   
    if (strVal.length == 0)
        return 0;
    if(strVal.length == 1)
        return strVal
    
    neg_values = strVal.match(negative_number_reg)

    if (neg_values != null){
   
        try{

            if(neg_values.length == 1){

                throw "negatives not allowed";
    
            } else if (neg_values.length > 1){
    
                throw "negatives not allowed: " + neg_values.join(';')
    
            }

        } catch(ex){

           return ex;

        }

       

    }

    values = strVal.match(reg_numbersOnly);
    
    if(values.length == 1)

        return "Not valid";

    return addNumbers(values);

}

function addNumbers(arr){

    var total = 0;

    for(var i = 0; i < arr.length; i++){
       

        total += parseInt(arr[i]);

    }

    return total;

}