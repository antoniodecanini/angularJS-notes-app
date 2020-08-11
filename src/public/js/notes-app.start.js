const app = angular.module("myApp", ["ngMaterial", "ngMessages"]);

app.controller("MainController", ($scope) => {
  $scope.task = "";

  $scope.taskList = [];

  function generateId(taskList) {
    let newId;

    if (taskList.length === 0) {
      newId = 1;
    } else {
      const lastTask = taskList.length - 1;
      const lastId = taskList[lastTask].id;
      newId = lastId + 1;
    }

    return newId;
  }

  function addTask(id) {
    $scope.taskList = [
      ...$scope.taskList,
      { id: id, task: $scope.task, isChecked: false },
    ];
    $scope.task = "";
  }

  function handleAddTask() {
    const id = generateId($scope.taskList);
    addTask(id);
    console.log($scope.taskList);
  }

  $scope.addTask = handleAddTask;
});
