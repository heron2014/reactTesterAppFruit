var React = require("react");

var Props = React.PropTypes;


var FruitFooter = React.createClass({

propTypes:{
	'deleteAllFruit': Props.func.isRequired
},

  render: function() {
    return (
      <div className="options-item">
        <button className="clear" onClick={this.props.deleteAllFruit}><img id="restart" src="assets/img/glyphicon-restart.png" /></button>
      </div>
    );
  }
});



module.exports = FruitFooter;