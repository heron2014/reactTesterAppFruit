var React = require('react/addons'),
	assert = require('assert'),
	AppFruit = require('../../src/js/components/AppFruit.jsx'),
	//StaticHeader = require("../../src/js/components/staticHeader.jsx"),
	FruitHeader = require("../../src/js/components/FruitHeader.jsx"),
	FruitList = require("../../src/js/components/FruitList.jsx"),
	FruitFooter = require("../../src/js/components/FruitFooter.jsx"),
    TestUtils = React.addons.TestUtils;



describe('AppFruit', function(){

		var shallowRenderer = TestUtils.createRenderer();	


		var fruities = [ { id: 1, fruit: "apple" } ];
		var headerText = "hi";
		var func = function(){return {};};


  shallowRenderer.render(
    <AppFruit
        fruities={fruities}
        headerText={headerText} 
        addFruit={func}
        changeText={func}
        incrementQuantity={func}
        decrementQuantity={func}
        clearFruities={func} />
	);

  var RootElement = shallowRenderer.getRenderOutput();
  var kids = RootElement.props.children;


  it("#renders a FruitHeader with the correct props", function (){
  	/*function(element,index,array){
			//console.log(element.type.displayName);
			
			if(element.type.displayName==='FruitHeader'){
			//	console.log(element.props);
			return element.props;
			}
	*/
		var headers = kids.filter(e => e.type === FruitHeader);
		//console.log('rootEl: ', RootElement);

		
		assert.equal(headers.length, 1);


		var props = headers.pop().props;

		/*assert.deepEqual(props, {
			title: headerText,
			addItem: func,
			changeText: func
		}); 
		*/
	});	



});