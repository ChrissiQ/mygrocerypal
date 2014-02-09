console.log("Deals js loaded.")

var app = angular.module('deals', [])

app.controller("DealsController", function ($scope) {
    $scope.deals = [
        { id: 1, name: "PC ® chicken breasts ", location: "Superstore", sale: "$5/lb 11.02/kg", price: "$8/lb 15.20/kg", end: "Feb 14, 2014"},
        { id: 2, name: "Eating Right Chicken Breasts", location: "Safeway", sale: "$7.99/lb 17.61/kg", price: "$10/lb 21.5/kg", end: "Feb 14, 2014"},
        { id: 3, name: "PC ® Free From ™ Whole Chicken", location: "Superstore", sale: "$3.48/lb 7.67/kg", price: "$7/lb 10/kg", end: "Feb 14, 2014"},
        { id: 4, name: "Kellogg's Nutri-Grain Bars", location: "Superstore", sale: "$2 ea", price: "$3 ea", end: "Feb 14, 2014"},
    ]
})

$(document).ready(function(){
    new Chartkick.PieChart("deals-breakdown", [["Superstore", 3],["Safeway", 1]]);
})

console.log(app)