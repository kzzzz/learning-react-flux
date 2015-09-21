var DisPatcher = require('./dispatcher');
var merge = require('merge');

var AppDispatcher = merge(DisPatcher.prototype, {
    handleViewAction: function(action){
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
});

module.exports = AppDispatcher;