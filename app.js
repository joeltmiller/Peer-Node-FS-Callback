var fs = require('fs');

function completeAudit(callback){

  fs.readFile('numbers.txt','utf-8',function(err, fileContents){
    if(err){
      console.log(err);
    }
    var stringCollection = fileContents.split(', ');
    var numCollection = parseIntArr(stringCollection);
    console.log(typeof numCollection[0])

  } );
}

function parseIntArr(arr){
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr[i] = parseInt(arr[i]);
  }
  return newArr;
}

completeAudit();
