'use strict';

require('angular');

var ProfileStore = require('./profile-store'),
    EducationStore = require('./education-store'),
    ExperienceStore = require('./experience-store'),
    SkillStore = require('./skill-store'),
    ProjectStore = require('./project-store');

angular.module('MyProfileApp.stores', [])
  .factory('stores.ProfileStore', ProfileStore)
  .factory('stores.EducationStore', EducationStore)
  .factory('stores.ExperienceStore', ExperienceStore)
  .factory('stores.SkillStore', SkillStore)
  .factory('stores.ProjectStore', ProjectStore)
