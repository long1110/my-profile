'use strict';

var ProfileInfoBlock = function() {
  return {
    restrict: 'E',
    templateUrl: 'scripts/directives/profile-info-block/profile-info-block.html',
    scope: {
      profile: '='
    },
    link: function(scope, element, attrs) {

    }
  };
};

module.exports = ProfileInfoBlock;
