(function(){
    'use strict'
    var i = 2;
    while(i <= 65536){
        console.log(i)
        i *= 2
    }
    //     // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
//     console.log(i)
//     do{
// // // This expression will generate a random number between 1 and 5
//       var conesBought = Math.floor(Math.random() * 5) + 1;all
    function randomSales(){
        return  Math.floor(Math.random() * 5) + 1;
    }
    function calculateCones(totalCones) {
        do {
            var totalToSell = Math.floor(Math.random() * 50) + 50;

            var actualSoldAmount = (totalCones >= totalToSell) ? totalToSell : totalCones;

            if (totalToSell === actualSoldAmount) {
                console.log(actualSoldAmount + ' Amount of cones sold...')
            } else {
                console.log('can not sell you ' + totalToSell + ' cones I only have ' + actualSoldAmount + '...')
            }
            totalCones -= actualSoldAmount

        } while (totalCones > 0)
        console.log('YES! I sold them all!')
    }
    calculateCones(allCones)




})();