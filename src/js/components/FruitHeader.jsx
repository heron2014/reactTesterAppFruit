var React = require("react");

var Props = React.PropTypes;

var FruitHeader = React.createClass({

  propTypes: {
    title: Props.string,
    changeText: Props.func.isRequired,
    fruitInput: Props.func.isRequired
  },

 textChangeHandler: function(e){
  e.preventDefault();
  this.props.changeText(e.target.value);  
  },

  submitHandler: function(e){
    e.preventDefault();
    console.log(this);
    this.props.fruitInput(this.props.title);
  },

  render: function() {
    return (
      <form onSubmit={this.submitHandler} className="fruit-header">
        <input value={this.props.title} className="searchbar" onChange={this.textChangeHandler} type="text" placeholder="add to the list" />
        <button className="plus" onClick={this.submitHandler}><img src="assets/img/glyphicon-leaf.png" /></button>
      </form>
    );
  }

});



module.exports = FruitHeader;