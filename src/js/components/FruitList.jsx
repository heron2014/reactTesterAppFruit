var React = require("react");
var FruitListItem = require("./FruitListItem.jsx");


var FruitList = React.createClass({

  

  render: function() {

    var items = [];

    this.props.items.forEach(function(item) {
      
        items.push(
          <FruitListItem key={item.id} content={item.fruit} quantity={item.number}
          addNumber={this.props.increaseNumber.bind(null, item.id)} />
          
        );
      
    }, this);

    return (
      <div className="fruit-list">
        {items}
      </div>
    );
  }
});



module.exports = FruitList;