console.log("Profile js loaded.")

var app = angular.module('profile', [])

app.controller("ProductsController", function ($scope) {
    $scope.products = [
        { id: 1, name: "PC Organic Chicken", brand: "PC" },
        { id: 2, name: "No-Name Ketchup", brand: "No-Name" },
        { id: 3, name: "Safeway Ketchup", brand: "Safeway" }
    ]
    $scope.myitems = [
        { id: 1, name: "chicken" },
        { id: 2, name: "Heinz Beans" },
        { id: 3, name: "broccoli" }
    ]
    $scope.isMyProduct = function(product){
        return
    }
    $scope.deals = [
        { id: 1, name: "Orange", location: "Superstore", sale: "$2.99/lb", price: "$3.49/lb", end: "Date"},
        { id: 2, name: "Orange", location: "Superstore", sale: "$2.99/lb", price: "$3.49/lb", end: "Date"},
        { id: 3, name: "Orange", location: "Superstore", sale: "$2.99/lb", price: "$3.49/lb", end: "Date"},
        { id: 4, name: "Orange", location: "Superstore", sale: "$2.99/lb", price: "$3.49/lb", end: "Date"},
        { id: 5, name: "Orange", location: "Superstore", sale: "$2.99/lb", price: "$3.49/lb", end: "Date"},
    ]
})

$(document).ready(function(){
    $('#add-watched-item').click(function(){
        $('#list-add').modal()
    })
})

console.log(app)