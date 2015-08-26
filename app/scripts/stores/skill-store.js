'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    lodash = require('lodash');

var CHANGE_EVENT = 'change';

var _skills = {
  languages: [
    { name: 'Go', level: 5 },
    { name: 'Erlang', level: 3 },
    { name: 'Javascript', level: 5 },
    { name: 'Coffeescript', level: 4 },
    { name: 'Ruby', level: 4 },
    { name: 'C', level: 3 },
    { name: 'Shell Script', level: 3 },
    { name: 'PHP', level: 3 },
  ],

  serverFrameworks: [
    { name: 'Beego', level: 5 },
    { name: 'Ruby on Rails', level: 4 },
    { name: 'KoaJS', level: 4 },
    { name: 'ExpressJS', level: 3 },
    { name: 'Codeigniter', level: 3 },
    { name: 'Laravel', level: 3 }
  ],

  webTechnologies: [
    { name: 'React', level: 5 },
    { name: 'React Native', level: 4 },
    { name: 'AngularJS', level: 5 },
    { name: 'BackboneJS', level: 5 },
    { name: 'jQuery', level: 5 },
    { name: 'D3', level: 3 },
  ],

  testings: [
    'Karma', 'Jasmine', 'Mocha', 'Protractor'
  ],

  tools: [
    'Docker',
    'Yeoman', 'Grunt', 'Gulp', 'Bower', 'RubyGem', 'Rake',
    'Git', 'SVN'
  ],

  databases: [
    'Couchbase', 'MySQL', 'MongoDB', 'Memcached'
  ],

  api: [
    'RESTful', 'SOAP'
  ]
};

var SkillStore = lodash.extend({}, EventEmitter.prototype, {
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
    return lodash.cloneDeep(_skills);
  }
});

module.exports = function() {
  return SkillStore;
};
