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
    if ($scope.task === "") {
      return alert("Campo adicionar item, não pode estar vazio");
    }
    $scope.taskList = [
      ...$scope.taskList,
      { id: id, task: $scope.task, isChecked: false },
    ];
    $scope.task = "";
  }

  function handleAddTask() {
    const id = generateId($scope.taskList);
    addTask(id);
  }

  $scope.addTask = handleAddTask;
});
