var React = require("react");

var staticHeader = React.createClass({

	render:function(){
		return(
			<div className="staticHeader">
				<center>
				<h2>This is an FruityFruitApp</h2>
				</center>
			</div>
		);
	}
});


module.exports = staticHeader;
