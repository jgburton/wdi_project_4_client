angular
.module('remoteComposer')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'usersIndex'
  })
  .state('ideas', {
    url: '/ideas',
    templateUrl: '/js/views/ideas/index.html',
    controller: 'IdeasIndexCtrl',
    controllerAs: 'ideaIndex'
  })
  .state('ideasShow', {
    url: '/ideas/:id',
    templateUrl: '/js/views/ideas/show.html',
    controller: 'IdeasShowCtrl',
    controllerAs: 'ideaShow'
  });

  $urlRouterProvider.otherwise('/');
}
