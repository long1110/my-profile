'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    lodash = require('lodash');

var CHANGE_EVENT = 'change';

var _educations = [
  {
    attendFrom: '2006',
    attendTo: '2009',
    school: 'Hong Kong University of Science and Technology',
    degree: '',
    fieldOfStudy: 'Bachelor (Hons) of Electronic Engineering',
    description: 'Graduation in 2009 with 2nd class (Div one) Hons'
  }
];

var EducationStore = lodash.extend({}, EventEmitter.prototype, {
  emitChange: function() {
    console.log('EducationStore emit change');
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
    return lodash.cloneDeep(_educations);
  }
});

module.exports = function() {
  return EducationStore;
};
