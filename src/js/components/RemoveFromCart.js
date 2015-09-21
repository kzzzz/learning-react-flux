var React = require("react");
var ShopActions = require('../actions/shop-actions');

var RemoveFromCart = React.createClass({
    handleClick: function () {
        ShopActions.removeItem(this.props.index);
    },
    render: function () {
        return (
            <div>
                <button onClick={this.handleClick}>Remove to cart</button>
            </div>
        );
    }
});

module.exports = RemoveFromCart;