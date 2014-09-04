'use strict';

require('angular');
require('ui-router');
require('./stores');
require('./directives');
require('./actions');

var LandingCtrl = require('./controllers/landing-ctrl');

angular.module('MyProfileApp', [
    'ui.router',
    'MyProfileApp.stores',
    'MyProfileApp.directives',
    'MyProfileApp.actions'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: 'views/landing.html',
        controller: [
          '$scope',
          'stores.ProfileStore',
          'stores.EducationStore',
          'stores.ExperienceStore',
          'stores.SkillStore',
          'stores.ProjectStore',
          LandingCtrl
        ]
      });
  }]);

angular.bootstrap(document.getElementById('app'), ['MyProfileApp']);
