'use strict';

require('angular');

angular.module('MyProfileApp.directives', [])
  .directive('blockList', require('./block-list/block-list'))
  .directive('block', require('./block/block'))
  .directive('profileInfoBlock', require('./profile-info-block/profile-info-block'))
  .directive('educationListBlock', require('./education-list-block/education-list-block'))
  .directive('experienceListBlock', require('./experience-list-block/experience-list-block'))
  .directive('pie', require('./pie/pie'))
  .directive('radar', require('./radar/radar'))
  .directive('tag', require('./tag/tag'))
  .directive('tagList', require('./tag-list/tag-list'))
