var React = require("react");

var Props = React.PropTypes;

var FruitListItem = React.createClass({



propTypes:{
  'content': Props.string,
  'addNumber': Props.func.isRequired,
  'subtractNumber': Props.func.isRequired,
  'quantity': Props.number
},

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


