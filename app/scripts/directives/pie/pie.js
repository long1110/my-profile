'use strict';

var Chart = require('chart');

var Pie = function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<canvas class="pie-chart"></canvas>',
    scope: {
      labels: '=',
      data: '='
    },
    compile: function(elm, attrs) {
      return {
        post: function(scope, elm, attrs) {
          var radarChartData = {
              labels: scope.labels,
              datasets: [
                {
                  label: "My First dataset",
                  fillColor: "rgba(220,220,220,0.2)",
                  strokeColor: "rgba(220,220,220,1)",
                  pointColor: "rgba(220,220,220,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: scope.data
                }
              ]
            };
          var ctx = elm[0].getContext('2d');
          new Chart(ctx).Radar(radarChartData);
        }
      }
    }
  };
};

module.exports = Pie;
