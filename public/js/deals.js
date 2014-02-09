console.log("Deals js loaded.")

var app = angular.module('deals', [])

app.controller("DealsController", function ($scope) {
    $scope.deals = [
        { id: 1, name: "Orange", location: "Superstore", sale: "$2.99/lb", price: "$3.49/lb", end: "Date"},
        { id: 2, name: "Apple", location: "Superstore", sale: "$2.99/lb", price: "$3.49/lb", end: "Date"},
        { id: 3, name: "Banana", location: "Superstore", sale: "$2.99/lb", price: "$3.49/lb", end: "Date"},
        { id: 4, name: "Grapes", location: "Superstore", sale: "$2.99/lb", price: "$3.49/lb", end: "Date"},
        { id: 5, name: "Avocado", location: "Superstore", sale: "$2.99/lb", price: "$3.49/lb", end: "Date"},
    ]
})

$(document).ready(function(){
    new Chartkick.PieChart("deals-breakdown", [["Blueberry", 44],["Strawberry", 23]]);
})

console.log(app)