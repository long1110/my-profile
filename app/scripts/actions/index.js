'use strict';

require('angular');

var ProfileActions = require('./profile-actions');

angular.module('MyProfileApp.actions', [])
  .factory('actions.ProfileActions', ProfileActions)
