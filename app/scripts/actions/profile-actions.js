'use strict';

var ProfileActions = function() {
  return {
    fetch: function() {
      console.log('fetch profile');
    }
  };
}

module.exports = function() {
  return ProfileActions;
};
