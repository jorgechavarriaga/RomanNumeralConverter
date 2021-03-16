function convertToRoman(num) {
    var romanNumber = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},convertedNumber = '',i;
    for ( i in romanNumber ) {
      while ( num >= romanNumber[i] ) {
        convertedNumber += i;
        num -= romanNumber[i];
      }
    }
    return convertedNumber;
  }
  
  var test = [2,3,4,5,9,12,16,29,44,45,68,83,97,99,400,500,501,649,798,891,1000,1004,1006,1023,2014,3999]
  
  for (var index = 0 ; index < test.length; index++){
    console.log(test[index], " - ", convertToRoman(test[index]));
  }