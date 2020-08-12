var app = angular.module('NoteController', []);

app.controller('CreateNote', function ($scope) {
  $scope.note = '';
  $scope.noteList = [];

  function generateId(noteList) {
    let newId;

    if (noteList.length === 0) {
      newId = 1;
    } else {
      const lastNote = noteList.length - 1;
      const lastId = noteList[lastNote].id;
      newId = lastId + 1;
    }

    return newId;
  }

  function addNote(id) {
    if ($scope.note === '') {
      return alert('Campo adicionar nota, não pode estar vazio');
    }
    $scope.noteList = [...$scope.noteList, { id: id, note: $scope.note }];
    $scope.note = '';
  }

  function handleAddNote() {
    const id = generateId($scope.noteList);
    addNote(id);
  }

  $scope.addNote = handleAddNote;
});
