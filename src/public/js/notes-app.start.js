const app = angular.module("myApp", ["ngMaterial", "ngMessages"]);

app.controller("MainController", ($scope) => {
  $scope.task = "";

  $scope.taskList = [];

  function addTask() {
    $scope.taskList = [
      ...$scope.taskList,
      { id: 0, task: $scope.task, isChecked: false },
    ];
    $scope.task = "";
    console.log($scope.taskList);
  }

  $scope.addTask = addTask;
});
