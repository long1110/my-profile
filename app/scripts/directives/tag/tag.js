'use strict';

var Tag = function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<span class="label label-default tag" ng-transclude></span>'
  }
};

module.exports = Tag;
