var app = angular.module("app", ["ui.router"]);


app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/layout/home");


    $stateProvider
        //.state('home', {
        //    url: '/home',
        //    templateUrl: 'app/views/home02-animated-pink.html'
          
        //})
      .state('layout', {
          abstract: true,
          url: '/layout',
          templateUrl: 'app/views/welcom.html'

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
    
})


