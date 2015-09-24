var app = angular.module('morseroom', ['ui.router']);
// routes
app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    })
});
