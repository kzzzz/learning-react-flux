var React = require("react");
var Catalog = require('./Catalog');
var Cart = require('./Cart');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Let's shop</h2>
                <Catalog />

                <h2>Cart</h2>
                <Cart />
            </div>
        );
    }
});

module.exports = App;