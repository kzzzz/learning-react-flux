var React = require("react");
var ShopActions = require('../actions/shop-actions');

var Decrease = React.createClass({
    handleClick: function () {
        ShopActions.decreaseItem(this.props.index);
    },
    render: function () {
        return (
            <div>
                <button onClick={this.handleClick}>-</button>
            </div>
        );
    }
});

module.exports = Decrease;