var app = angular.module("ZoeFavFood", []);

app.controller("FavFoods", ($scope) => {
  $scope.dog = "I'mma dog";
  $scope.foods = ["Tangerine", "Lemon", "Lime", "Passionfruit", "Coconut", "Apricot", "Pear", "all of them..."];

  $scope.showListView = true;






  $scope.showFood = () => {
      $scope.showListView = false;
      console.log("in showFood", $scope.foods);
    };



});

