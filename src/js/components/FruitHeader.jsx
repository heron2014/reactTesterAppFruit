var React = require("react");

var FruitHeader = React.createClass({

	textChangeHandler: function(e){
		e.preventDefault();
		this.props.changeText(e.target.value);
	},

	submitHandler:function(e){
		e.preventDefault();
		this.props.fruitInput(this.props.title);
	},


  render: function() {
    return (
      <form onSubmit={this.submitHandler} className="fruit-header">
        <input value={this.props.title} className="searchbar"  onChange={this.textChangeHandler} type="text" placeholder="Add to the list" />
        <button className="plus" onClick={this.submitHandler}><img src="assets/img/glyphicon-leaf.png" /></button>
      </form>
    );
  }

});



module.exports = FruitHeader;