var app = angular.module("ShoppingListApp",[]);

app.controller("ListController", function($scope){
    $scope.list=["Cheese","Milk","Bacon"];

    $scope.addItem=function (item) {
        $scope.list.push(item);
        $scope.newItem="";
    }

    $scope.remove=function (item) {
        var itemindex= $scope.list.indexOf(item);
        $scope.list.splice(itemindex,1);
    }
});