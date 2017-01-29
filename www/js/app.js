// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('welcome', {
        url: '/welcome',
        templateUrl: 'templates/patient/welcome.html'
    })
  .state('sign-up', {
        url: '/sign-up',
        templateUrl: 'templates/patient/sign-up.html'
    })
  .state('calendar', {
        url: '/calendar',
        templateUrl: 'templates/patient/calendar.html'
    })
  .state('medical-contacts', {
        url: '/medical-contacts',
        templateUrl: 'templates/patient/medical-contacts.html'
    })
  .state('terms-and-conditions', {
        url: '/terms-and-conditions',
        templateUrl: 'templates/patient/terms-and-conditions.html'
    })
  .state('sign-in', {
        url: '/sign-in',
        templateUrl: 'templates/patient/sign-in.html'
    })
  .state('home', {
        url: '/home',
        templateUrl: 'templates/patient/home.html'
    })
  .state('about-you', {
        url: '/about-you',
        templateUrl: 'templates/patient/about-you.html'
    })
  .state('clinical-research-results', {
        url: '/clinical-research-results',
        templateUrl: 'templates/patient/clinical-research-results.html'
    })
  .state('clinical-research', {
        url: '/clinical-research',
        templateUrl: 'templates/patient/clinical-research.html'
    })
  .state('medication-alert-settings', {
        url: '/medication-alert-settings',
        templateUrl: 'templates/patient/medication-alert-settings.html'
    })
  .state('medication-alert', {
        url: '/medication-alert',
        templateUrl: 'templates/patient/medication-alert.html'
    })
  .state('medication', {
        url: '/medication',
        templateUrl: 'templates/patient/medication.html'
    })
  .state('new-medication', {
        url: '/new-medication',
        templateUrl: 'templates/patient/new-medication.html'
    })
  .state('rareshare-options', {
        url: '/rareshare-options',
        templateUrl: 'templates/patient/rareshare-options.html'
    })
  .state('refills-log', {
        url: '/refills-log',
        templateUrl: 'templates/patient/refills-log.html'
    })
  .state('scientific-consult', {
        url: '/scientific-consult',
        templateUrl: 'templates/patient/scientific-consult.html'
    })
  .state('single-medication', {
        url: '/single-medication',
        templateUrl: 'templates/patient/single-medication.html'
    })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/welcome');

});
