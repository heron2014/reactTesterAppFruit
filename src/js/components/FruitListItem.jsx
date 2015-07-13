var React = require("react");

var FruitListItem = React.createClass({

 

  render: function() {

    return (

      <div className="fruit-item">
        <button className="minus" onClick={this.props.subtractNumber}>-</button>
          {this.props.content}
        <button className="plus" onClick={this.props.addNumber}>+</button>
        <span className="list-number">{this.props.quantity}</span>
      </div>
    );
  }

});

module.exports = FruitListItem;