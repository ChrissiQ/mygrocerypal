var app = angular.module('profile', [])

app.controller("ProductsController", function ($scope) {
    $scope.products = [
        { id: 1, name: "PC Organic Chicken", brand: "PC" },
        { id: 2, name: "No-Name Ketchup", brand: "No-Name" },
        { id: 3, name: "Safeway Ketchup", brand: "Safeway" }
    ]


    $scope.myitems = [];
    $scope.submitNewItem = function(){
        if ($('#additem').val()){
            $.ajax('/item', {
                method: 'POST',
                type: 'POST',
                beforeSend: function(jqXHR, settings){
                    jqXHR.setRequestHeader('X-CSRF-Token', $('#csrf').val())
                },
                data: {
                    item: {name: $('#additem').val()}
                },
                success: function (data) {
                    $scope.myitems.push(data)
                    $scope.$apply()
                }
            })
        }
    }
    $.each(items, function(num, item){
        $scope.myitems.push(item)
    })




    $scope.mygrocers = [];
    $scope.submitNewGrocer = function(){
        if ($('#additem').val()){
            $.ajax('/grocer', {
                method: 'POST',
                type: 'POST',
                beforeSend: function(jqXHR, settings){
                    jqXHR.setRequestHeader('X-CSRF-Token', $('#csrf').val())
                },
                data: {
                    item: {name: $('#addgrocer').val()}
                },
                success: function (data) {
                    $scope.myitems.push(data)
                    $scope.$apply()
                }
            })
        }
    }
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