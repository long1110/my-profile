'use strict';

var Block = function() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    templateUrl: 'scripts/directives/block/block.html',
    scope: {
      title: '@'
    }
  };
};

module.exports = Block;
