"use strict";
(function() {
  //  Create a file named for_loops.js inside the js directory and link it to your loops.html file.
//
  //      Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
  //  For example, showMultiplicationTable(7) should output
//
//
  //  7 x 1 = 7
    //7 x 2 = 14
  //  7 x 3 = 21
//    7 x 4 = 28
 //   7 x 5 = 35
  //  7 x 6 = 42
 //   7 x 7 = 49
   // 7 x 8 = 56
//    7 x 9 = 63
  //  7 x 10 = 70

function showMultiplicationTable(number, limit) {

     for(var i = 0; i <= limit; i++) {
       var total = i * number;
         console.log( number + " x " + i + " = " + total)

     }
}
    showMultiplicationTable(7, 10)
    //    var result = i * showMultiplicationTable();
    //   }
//
//

    // var random = Math.floor(Math.random() * (200 - 20 + 1)) + 20;

    var result;
    var min = 20;
    var max = 200;

    for (var i = 0; i < 10; i++) {
        result = Math.ceil(Math.random() * (max - min) + min)
    }
    console.log(result)

    //  for (var i = 1; i < 5; i++) { console.log(i);
    //    var
    //for (var i = "1"; i.length < 9; i "2")
        console.log(i);







})();