var app = angular.module("ZoeFavFood", []);

app.controller("FavFoods", ($scope) => {
  $scope.dog = "I'mma dog";
  $scope.foods = ["La Croix", "Chocolat Chip Cookies", "Dippin Dots", "Coffee"];

  $scope.showListView = true;






  $scope.showFood = () => {
      $scope.showListView = false;
      console.log("in showFood", $scope.foods);
    };



});

