'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    lodash = require('lodash');

var CHANGE_EVENT = 'change';

var _projects = [
  {
    name: 'Dropsafe ITS',
    workFrom: { month: 'march', year: '2014' },
    workTo: { month: 'June', year: '2014' },
    projectUrl: 'https://app.dropsafe.com',
    description: '',
    videoUrl: ''
  },
  {
    name: 'InControl2',
    workFrom: { month: 'january', year: '2013' },
    workTo: { month: 'march', year: '2014' },
    projectUrl: 'https://InControl2.peplink.com',
    description: '',
    videoUrl: ''
  }
];

var ProjectStore = lodash.extend({}, EventEmitter.prototype, {
  emitChange: function() {
    console.log('ProjectStore emit change');
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
    return lodash.cloneDeep(_projects);
  }
});

module.exports = function() {
  return ProjectStore;
};
