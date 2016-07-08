var fs = require('fs');

function completeAudit(callback){

  fs.readFile('numbers.txt','utf-8',function(err, fileContents){
    if(err){
      console.log(err);
    }

    var stringCollection = fileContents.split(', ');
    var numCollection = parseIntArr(stringCollection);

    callback(numCollection);

  } );
}

function parseIntArr(arr){
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr[i] = parseInt(arr[i]);
  }
  return newArr;
}

function findMin (arr){
  var min  = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min ){
      min = arr[i];
    }
  }
  return min;
}

function findMax (arr){
  var max  = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max ){
      max = arr[i];
    }


  }
  return max;
}

function findAvg (arr){
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return Math.round(sum / arr.length);

}

function done(numArray){
  //console.log(numArray);
  console.log("Min: ",findMin(numArray));
  console.log("Max: ",findMax(numArray));
  console.log("Avg: ",findAvg(numArray));
  console.log("DONE!!");
}



completeAudit(done);
