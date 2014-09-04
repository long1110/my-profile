'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    lodash = require('lodash');

var CHANGE_EVENT = 'change';

var _profileState = {
  loading: false,
  error: null
};

//var _profile = {
//  firstName: null,
//  lastName: null,
//  email: null,
//  phone: null
//};

var _profile = {
  firstName: 'Marcus',
  lastName: 'Yip',
  email: 'long3981@gmail.com',
  phone: '+85293293981'
};

var ProfileStore = lodash.extend({}, EventEmitter.prototype, {
  emitChange: function() {
    console.log('ProfileStore emit change');
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

  set: function(profile) {
    _profile = lodash.extend(_profile, profile);
  },

  get: function() {
    return lodash.cloneDeep(_profile);
  },

  getState: function() {
    return lodash.cloneDeep(_profileState);
  }
});

module.exports = function() {
  return ProfileStore;
};


