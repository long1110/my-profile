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
    periodFrom: { month: 'march', year: '2014' },
    periodTo: { present: true },
    description: ''
  },
  {
    companyName: 'Pepwave Ltd',
    title: 'Software Engineer',
    location: '',
    periodFrom: { month: 'may', year: '2011' },
    periodTo: { month: 'april', year: '2014' },
    description: ''
  },
  {
    companyName: 'Vtech Telecommunication Ltd',
    title: 'Software Engineer II',
    location: '',
    periodFrom: { month: 'september', year: '2009' },
    periodTo: { month: 'april', year: '2011' },
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
