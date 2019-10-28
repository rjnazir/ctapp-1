angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.accueil', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/accueil.html',
        controller: 'accueilCtrl'
      }
    }
  })

  .state('menu.recherche', {
    url: '/search',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recherche.html',
        controller: 'rechercheCtrl'
      }
    }
  })

  .state('menu.aPropos', {
    url: '/apropos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aPropos.html',
        controller: 'aProposCtrl'
      }
    }
  })

  .state('menu.quitter', {
    url: '/quitter',
    views: {
      'side-menu21': {
        templateUrl: 'templates/accueil.html',
      }
    }
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/menu/home')


});