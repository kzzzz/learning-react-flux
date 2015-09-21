var React = require("react");
var ShopActions = require('../actions/shop-actions');
var ShopStore = require('../stores/shop-store');
var RemoveFromCart = require('./RemoveFromCart');
var Increase = require('./Increase');
var Decrease = require('./Decrease');

function cartItems() {
    return {
        items: ShopStore.getCart()
    };
}

var Cart = React.createClass({
    getInitialState: function () {
        return cartItems();
    },
    componentWillMount: function () {
        ShopStore.addChangeListener(this._onChange)
    },
    _onChange: function () {
        this.setState(cartItems());
    },
    render: function () {
        var total = 0;
        var createItem = function (item, i) {
            var subtotal = item.cost * item.qty;
            total += subtotal;
            return (
                <tr key={i}>
                    <td><RemoveFromCart index={i}/></td>
                    <td>{item.title}</td>
                    <td>{item.cost}</td>
                    <td>
                        <Increase index={i}/>
                        <Decrease index={i}/>
                    </td>
                    <td>{subtotal}</td>
                </tr>
            )
        };
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Qty</th>
                        <th></th>
                        <th>Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.items.map(createItem)}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan="4">Total</td>
                        <td>{total}</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
});

module.exports = Cart;