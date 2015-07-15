var React = require('react/addons'),
  assert = require('assert'),
  FruitHeader = require("../../src/js/components/FruitHeader.jsx"),
  TestUtils = React.addons.TestUtils;


  describe('FruitHeader', function() {
     var result;
     var output;
      var func = function(val) {
        result = val;
      };

      var title = "fruit";

    before('render and locate element', function() {
        result= null;
        output = TestUtils.renderIntoDocument(
        <FruitHeader title={title} fruitInput={func} changeText={func} />
      );
    });

    it("#renders a form that has a input and a button", function(){
      var formComponent = TestUtils.findRenderedDOMComponentWithTag(
        output,
        "form"
      );

      var kids = formComponent.props.children;

        function filterHelp(element, index, array){
        if(element.type ==="input"){
          return element.type
        }
      }
        function filterHelp2(element, index, array){
        if(element.type ==="button"){
          return element.type
        }
      }

    assert.equal(kids.filter(filterHelp).length, 1);
    assert.equal(kids.filter(filterHelp2).length, 1);
    });


    it('#call function fruitInput on submit using title as a parameter', function() {
      var formComponent = TestUtils.findRenderedDOMComponentWithClass(
        output, 
        'plus'
      );

      var formNode = React.findDOMNode(formComponent);

      TestUtils.Simulate.click(formNode);
      assert.equal(result, title);

    });

     it('#call function changeText when user type somthing into input tag', function() {
      var input = TestUtils.findRenderedDOMComponentWithTag(
        output, 
        'input'
      );

      var inputNode = React.findDOMNode(input);

      TestUtils.Simulate.change(inputNode, {target: {value: 'hello'}});
      assert.equal(result, 'hello');

    });


    

});