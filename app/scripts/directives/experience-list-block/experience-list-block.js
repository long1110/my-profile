'use strict';

var ExperienceListBlock = function() {
  return {
    restrict: 'E',
    templateUrl: 'scripts/directives/experience-list-block/experience-list-block.html',
    scope: {
      experiences: '='
    }
  };
};

module.exports = ExperienceListBlock;
