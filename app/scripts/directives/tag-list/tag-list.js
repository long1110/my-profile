'use strict';

var TagList = function() {
  return {
    restrict: 'E',
    templateUrl: 'scripts/directives/tag-list/tag-list.html',
    scope: {
      title: '@',
      data: '='
    }
  };
};

module.exports = TagList;
