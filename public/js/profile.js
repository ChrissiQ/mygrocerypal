var app = angular.module('profile', [])

app.controller("ProductsController", function ($scope) {

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
                    $('#additem').val('')
                    $('#additem').focus()
                }
            })
        }
    }
    $.each(items, function(num, item){
        $scope.myitems.push(item)
    })




    $scope.mygrocers = [];
    $scope.submitNewGrocer = function(){
        if ($('#addgrocer').val()){
            $.ajax('/grocer', {
                method: 'POST',
                type: 'POST',
                beforeSend: function(jqXHR, settings){
                    jqXHR.setRequestHeader('X-CSRF-Token', $('#csrf').val())
                },
                data: {
                    grocer: {name: $('#addgrocer').val()}
                },
                success: function (data) {
                    $scope.mygrocers.push(data)
                    $scope.$apply()
                    $('#addgrocer').val('')
                    $('#addgrocer').focus()
                }
            })
        }
    }
    $.each(grocers, function(num, grocer){
        $scope.mygrocers.push(grocer)
    })
})

$(document).ready(function(){
    $('#add-watched-item').click(function(){
        $('#list-add').modal()
    })
})