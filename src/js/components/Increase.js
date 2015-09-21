var React = require("react");
var ShopActions = require('../actions/shop-actions');

var Increase = React.createClass({
    handleClick: function () {
        ShopActions.increaseItem(this.props.index);
    },
    render: function () {
        return (
            <div>
                <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
});

module.exports = Increase;