var ShopConstants = require('../constants/shop-constants');
var ShopDispatcher = require('../dispatchers/shop-dispatcher');

var ShopActions = {
    addItem: function (item) {
        ShopDispatcher.handleViewAction({
            actionType: ShopConstants.ADD_ITEM,
            item: item
        })
    },
    removeItem: function (index) {
        ShopDispatcher.handleViewAction({
            actionType: ShopConstants.REMOVE_ITEM,
            index: index
        })
    },
    increaseItem: function (index) {
        ShopDispatcher.handleViewAction({
            actionType: ShopConstants.INCREASE_ITEM,
            index: index
        })
    },
    decreaseItem: function (index) {
        ShopDispatcher.handleViewAction({
            actionType: ShopConstants.DECREASE_ITEM,
            index: index
        })
    }
};

module.exports = ShopActions;