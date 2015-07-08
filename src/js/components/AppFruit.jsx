var React = require("react");
var FruitHeader = require("./FruitHeader.jsx");
var FruitList = require("./FruitList.jsx");
var FruitFooter = require("./FruitFooter.jsx");

var AppFruit = React.createClass({

  getInitialState: function() {
    return {
      fruities: [
        {id:1, fruit: "Apple", number: 3},
        {id:2, fruit: "Kiwi", number: 1},
        {id:3, fruit: "Mango", number: 4},      
      ]
    };
  },

  incrementNumber: function(id) {
    var newFruits = [];
    
    this.state.fruities.forEach(function(fruit) {
      if(fruit.id === id) {
        fruit.number += 1;
      }
      
      return newFruits.push(fruit);    
    });

    return this.setState({
      fruities: newFruits
    });
  },

  render: function() {
    return (
      <div className="app-wrapper">
        <FruitHeader />
        <FruitList items={this.state.fruities}
          increaseNumber={this.incrementNumber} />
        <FruitFooter />        
      </div>
    );
  }

});


module.exports = AppFruit;

