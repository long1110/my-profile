'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    lodash = require('lodash');

var CHANGE_EVENT = 'change';

var _experiences = [
  {
    companyName: 'Linxr Ltd',
    title: 'Software Engineer',
    location: '',
    periodFrom: { month: 'Mar', year: '2014' },
    periodTo: { present: true },
    duties: [
      "Develop single page web application using AngularJS",
      "Develop server application using NodeJS and Koa.js",
      "Decide suitable software stack and software structure to improve their quality and maintainability",
      "Improve software development workflow by using tools such as Grunt, Gulp and Bower",
      "Make unit and e2e testing as part of development workflow"
    ],
    description: ''
  },
  {
    companyName: 'Pepwave Ltd',
    title: 'Software Engineer',
    location: '',
    periodFrom: { month: 'May', year: '2011' },
    periodTo: { month: 'Apr', year: '2014' },
    duties: [
      "Develop software for wireless customer premises equipment (CPE) under linux platform",
      "Work on cloud based application development from start-up",
      "Develop a AJAX heavy front-end application",
      "Develop server side application to query MySQL data, communicate with web service and provide API for data access",
      "Share the cutting-edge front-end technology to colleagues and enhance coding quality and problem solving skill"
    ],
    description: ''
  },
  {
    companyName: 'Vtech Telecommunication Ltd',
    title: 'Software Engineer II',
    location: '',
    periodFrom: { month: 'Sep', year: '2009' },
    periodTo: { month: 'Apr', year: '2011' },
    duties: [
      "Work on VegaOne, which is cordless baseband processor, and platform for embedded DECT phone system software development which programming in C language",
      "Design the test plan and cooperate with tester to ensure firmware quality"

    ],
    description: ''
  }
];

var ExperienceStore = lodash.extend({}, EventEmitter.prototype, {
  emitChange: function() {
    console.log('ExperienceStore emit change');
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;
    console.log('dispatcher callback', payload);
    switch(action.type) {
      
    }

    return true;
  }),

  getAll: function() {
    return lodash.cloneDeep(_experiences);
  }
});

module.exports = function() {
  return ExperienceStore;
};
