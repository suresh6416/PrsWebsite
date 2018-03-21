var app = angular.module("app", ['ui.router']);


app.controller('HomeController', ['$rootScope', '$scope', function ($rootScope, $scope) {
	$scope.$on('$includeContentLoaded', function () {
		Layout.init(true); // init header 
	});
}]);


app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

	//$locationProvider.html5Mode({
	//	enabled: true,
	//	requireBase: false
	//});

	$urlRouterProvider.otherwise("/layout/home");


    $stateProvider
        //.state('home', {
        //    url: '/home',
        //    templateUrl: 'app/views/home02-animated-pink.html'
          
        //})
      .state('layout', {
          abstract: true,
          url: '/layout',
          templateUrl: 'app/views/welcom.html',
          controller: 'HomeController'

      })
       .state('layout.home', {
           url: '/home',
           templateUrl: 'app/views/landing/promo.html'

       })
      .state('layout.softdev', {
          url: '/SoftwareDevelopment',
          templateUrl:'app/views/services/softDev.html'
      })
     .state('layout.webdev', {
         url: '/WebDevelopment',
         templateUrl: 'app/views/services/webDev.html'
     })
         .state('layout.aboutus', {
             url: '/aboutus',
             templateUrl: 'app/views/insights/aboutus.html'
         })
     .state('layout.clients', {
         url: '/clients',
         templateUrl: 'app/views/insights/clients.html'
     })
     .state('layout.projects', {
         url: '/projects',
         templateUrl: 'app/views/insights/projects.html'
     })
    
})

app.run(function ($location) {
	$location.path('/');
});


