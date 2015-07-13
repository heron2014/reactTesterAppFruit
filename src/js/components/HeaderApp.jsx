var React = require("react");
var StaticHeader = require("./staticHeader.jsx");


var HeaderApp = React.createClass({

		render:function(){
			
		return (
			<div className="fuxkingHeaderClassForAnita">
				<StaticHeader />
			</div>
		);
	
	}
});

module.exports = HeaderApp;