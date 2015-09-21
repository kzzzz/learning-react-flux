var React = require("react");
var ShopActions = require('../actions/shop-actions');

var AddToCart = React.createClass({
    handleClick: function () {
        ShopActions.addItem(this.props.item);
    },
    render: function () {
        return (
            <div>
                <button onClick={this.handleClick}>Add to cart</button>
            </div>
        );
    }
});

module.exports = AddToCart;