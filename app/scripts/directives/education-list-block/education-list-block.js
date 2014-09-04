'use strict';

var EducationListBlock = function() {
  return {
    restrict: 'E',
    templateUrl: 'scripts/directives/education-list-block/education-list-block.html',
    scope: {
      educations: '='
    },
    link: function(scope, element, attrs) {
    }
  };
};

module.exports = EducationListBlock;
