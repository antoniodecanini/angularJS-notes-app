var app = angular.module('App', [
  'ngMaterial',
  'ngMessages',
  'ui.router',
  'TaskController',
  'NoteController',
]);

app.config(function ($stateProvider) {
  var homeState = {
    name: 'home',
    url: '',
    templateUrl: './views/home.html',
  };

  var noteState = {
    name: 'notes',
    url: '/notes',
    templateUrl: './views/notes.html',
    controller: 'CreateNote',
  };

  var todoState = {
    name: 'todo',
    url: '/todo',
    templateUrl: './views/todo.html',
    controller: 'CreateTask',
  };

  $stateProvider.state(noteState);
  $stateProvider.state(todoState);
  $stateProvider.state(homeState);
});
