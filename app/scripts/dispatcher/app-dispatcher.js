var Dispatcher = require('./dispatcher.js'),
    lodash = require('lodash');

var AppDispatcher = lodash.extend(Dispatcher.prototype, {
  handleViewAction: function(action, payload){
    console.log('view action', action, payload);
    this.dispatch({
      source: 'VIEW_ACTION',
      action: {
        type: action,
        payload: payload
      }
    })
  },

  handleAppAction: function(action, payload) {
    console.log('app action', action, payload);
    this.dispatch({
      source: 'APP_ACTION',
      action: {
        type: action,
        payload: payload
      }
    })
  }
})

module.exports = AppDispatcher;
