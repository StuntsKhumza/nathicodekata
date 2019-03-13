module.exports = function (arr) {

    var hcd, v1, v2;

    if (typeof (arr) == 'object') {

        for (var i = 0; i < arr.length; i++) {

            if (i + 1 == arr.length || typeof (arr[i + 1]) == 'undefined') { //done

                return hcd;

            }

            v1 = arr[i];
            v2 = arr[i + 1];

            if (v1 % v2 == 0){
                hcd = v2;
            }
                
        }

    } else {
        return 'Not object';
    }

}
