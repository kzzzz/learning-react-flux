var React = require("react");
var ShopActions = require('../actions/shop-actions');
var ShopStore = require('../stores/shop-store');
var AddToCart = require('./AddToCart');

var Catalog = React.createClass({
    getInitialState: function () {
        return {
            items: ShopStore.getCatalog()
        };
    },
    render: function () {
        var createItem = function (item) {
            return (
                <tr>
                    <td>{item.title}</td>
                    <td>{item.cost}</td>
                    <td><AddToCart item={item}/></td>
                </tr>
            )
        };
        return (
            <div>
                <table>
                    {this.state.items.map(createItem)}
                </table>
            </div>
        );
    }
});

module.exports = Catalog;