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

var googleHourlyRateDollars = parseFLoat (prompt ( "What is your Google hourly rate?"))
var amazonHourlyRateDollars = parseFloat (prompt ( "What is your Amazon hourly rate?"))
var facebookHourlyRateDollars = parseFloat (prompt ( "What is your Facebook hourly rate?"))

var googleHours = parseFloat (prompt ("How many hours this week at GoogLe?"))
var amazonHours = parseFloat (prompt ( "How many hours this week at Amazon?"))
var facebookHours = parseFLoat (prompt ("How many hours this week at Facebook?"))

var totalPayment = googleHours * googleHourlyRateDollars
totalPayment += amazonHours * amazonHourlyRateDollars
totalPayment += facebookHours * facebookHourlyRateDollars
alert("Total payment is $" + totalPayment + totalPayment.toFixed (2))
