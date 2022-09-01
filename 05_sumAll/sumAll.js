const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 || end < 0) {
        return 'ERROR';
    } else if (!Number.isInteger(start) || !Number.isInteger(end) ) {
        return 'ERROR';
    }
    else if (end > start) {
         for (start; start <= end; start++) {
        sum += start; 
    } return sum;
    } else if (start > end) {
        for (end; end <= start; end++) {
            sum += end;
        } return sum; 
    }
};

// Do not edit below this line
module.exports = sumAll;
