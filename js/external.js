"use strict";
console.log('Hello, from external JavaScript')
alert(`Welcome to my Website!`)

var favoriteColor = parseFloat(prompt('What is your favorite color?'))
    alert('My favorite color is also' + favoriteColor);

var daysRentedLittleMermaid = parseFloat(prompt( 'How many days was the Little Mermaid rented'))
var daysRentedBrotherBear = parseFloat(prompt(  'How many days was Brother Bear rented?'))
var daysRentedHurcules = parseFloat(prompt( 'How many days was Hurcules rented?'))
var totalcost = ((daysRentedLittleMermaid + daysRentedBrotherBear + daysRentedHurcules) *3)
alert('Total days rented charge' + totalcost)