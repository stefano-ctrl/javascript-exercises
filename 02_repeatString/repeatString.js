const repeatString = function(string, number) {
     let newString = '';
     for (let i = 0; i < number; i++) {
         newString += string;
     } if (number < 0) {
          return 'ERROR';
     } else if (string === '') {
          return '';
     }
     return newString;
     
}



// Do not edit below this line
module.exports = repeatString;
