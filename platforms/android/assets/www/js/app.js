// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var mapApp = angular.module('starter', ['ionic']);

mapApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}) ;

mapApp.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    .state('home', {
        url: "/",
        templateUrl: "templates/home.html",
        controller: 'HomeController'
       
    }) 
    .state('map', {
        url: "/map",
        templateUrl: "templates/map.html",
         controller: 'MapCtrl'
       
    })

    .state('resto', {
        url: "/resto",
        templateUrl: "templates/resto_detail.html"
       
    })

    .state('resto_list', {
        url: "/resto_list",
        templateUrl: "templates/resto_list.html"
       
    })
    
    .state('resto_detail', {
        url: "/resto_detail",
        templateUrl: "templates/resto_detail.html"
       
    })

    .state('find_resto', {
        url: "/find_resto",
        templateUrl: "templates/find_resto.html",
        controller: 'FindRestoController'
       
    }); 

    $urlRouterProvider.otherwise('/');   

});


