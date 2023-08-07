module.exports = function reverse (n) {
    let str = String(n);
    let result = '';
    for (i = 0; i < str.length; i++) {
        
        if (str[i] === '-') {
            result = '' + result;
        } else {
            result = str[i] + result;
        }
    }
    return +result;
};
