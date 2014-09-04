'use strict';

var BlockList = function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'scripts/directives/block-list/block-list.html'
  };
};

module.exports = BlockList;
