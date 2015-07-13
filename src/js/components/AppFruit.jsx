var React = require("react");
var FruitHeader = require("./FruitHeader.jsx");
var FruitList = require("./FruitList.jsx");
var FruitFooter = require("./FruitFooter.jsx");
var StaticHeader = require("./staticHeader.jsx");

var AppFruit = React.createClass({

  getInitialState: function() {
    return {
      headerText: '',
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

  decrementNumber: function(id) {
    var newFruits = [];

    this.state.fruities.forEach(function(fruit) {
      if (fruit.id === id) {
        if (fruit.number === 0) {
          return;
        }
        fruit.number -= 1;
      }
      return newFruits.push(fruit);
    });

    return this.setState({
      fruities: newFruits
    });
  },

  changeHeaderText: function(text) {
    return this.setState({headerText: text});
  },

  addFruit: function(userInput) {
    if (userInput === '') {
      return;
    }
    var newFruit = this.state.fruities;
    var newId = Date.now().toString();

    var brandNewFruits = {
      id: newId,
      fruit: userInput,
      number: 1
    }

    newFruit.push(brandNewFruits);

    return this.setState({
      headerText: "",
      fruities: newFruit
    });

  },

  clearItems: function() {
    var emptyFruit = [];

    return this.setState({
      fruities: emptyFruit
    });
  },

  render: function() {
    return (
      <div className="app-wrapper">
        <StaticHeader />
        <FruitHeader title={this.state.headerText}
         fruitInput={this.addFruit}
         changeText={this.changeHeaderText} />
        <FruitList items={this.state.fruities}
          increaseNumber={this.incrementNumber} 
          decreaseNumber={this.decrementNumber} />
        <FruitFooter emptyFruit={this.clearItems} />        
      </div>
    );
  }

});


module.exports = AppFruit;

