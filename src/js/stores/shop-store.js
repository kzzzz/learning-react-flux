var ShopDispatcher = require('../dispatchers/shop-dispatcher');
var ShopConstants = require('../constants/shop-constants.js');
var merge = require('merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _catalog = [];

for (var i = 1; i < 10; i++) {
    _catalog.push({
        id: i,
        title: 'Widget #' + i,
        cost: i
    });
}

var _cartItems = [];

function _addItem(item) {
    if (!item.inCart) {
        item['qty'] = 1;
        item['inCart'] = true;
        _cartItems.push(item);
    } else {
        _cartItems.forEach(function (cartItem, i) {
            if (cartItem.id === item.id) {
                _increaseItem(i);
            }
        })
    }
}

function _removeItem(index) {
    _cartItems[index].inCart = false;
    _cartItems.splice(index, 1);
}

function _increaseItem(index) {
    _cartItems[index].qty++;
}

function _decreaseItem(index) {
    if (_cartItems[index].qty > 1) {
        _cartItems[index].qty--;
    } else {
        _removeItem(index);
    }
}

var ShopStore = merge(EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function (cb) {
        this.remove(CHANGE_EVENT, cb);
    },
    getCart: function () {
        return _cartItems;
    },
    getCatalog: function () {
        return _catalog;
    },
    dispatcherIndex: ShopDispatcher.register(function (payload) {
        var action = payload.action;

        switch (action.actionType) {
            case ShopConstants.ADD_ITEM:
                _addItem(action.item);
                break;
            case ShopConstants.REMOVE_ITEM:
                _removeItem(action.index);
                break;
            case ShopConstants.INCREASE_ITEM:
                _increaseItem(action.index);
                break;
            case ShopConstants.DECREASE_ITEM:
                _decreaseItem(action.index);
                break;
        }
        ShopStore.emitChange();

        return true;
    })
});

module.exports = ShopStore;