angular.module('ionicApp', ['ionic'])
    //remove back button text
    .config(function($ionicConfigProvider) {
        $ionicConfigProvider.backButton.text('').icon('ion-chevron-left').previousTitleText(false);
    })
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                url: "",
                abstract: true,
                templateUrl: "/templates/menu.html"
            })
            .state('app.home', {
                url: "/home",
                views: {
                    'content': {
                        templateUrl: "/templates/home.html"
                    }
                }
            })
            .state('app.about', {
                url: "/about",
                views: {
                    'content': {
                        templateUrl: "/templates/about.html" // you can add a controller property
                    }
                }
            })
            .state('app.go', {
                url: "/about/go",
                views: {
                    'content': {
                        templateUrl: "templates/go.html"
                    }
                }
            })

        $urlRouterProvider.otherwise("/home");
    })

    .controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {
        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
    });

