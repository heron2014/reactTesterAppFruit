var React = require('react/addons'),
  assert = require('assert'),
  FruitFooter = require("../../src/js/components/FruitFooter.jsx"),
  TestUtils = React.addons.TestUtils;


  describe('FruitFooter', function() {
     var result;
      var func = function() {
        result = true;
      }
      var output;

    before('render and locate element', function() {
        result= null;
        output = TestUtils.renderIntoDocument(
        <FruitFooter deleteAllFruit={func} />
      );
    });

    it("#renders a button that calls this.props.clearItems on click", function(){
      var clearComponent = TestUtils.findRenderedDOMComponentWithClass(
        output,
        "clear"
      );

      var clearNode = React.findDOMNode(clearComponent);

      TestUtils.Simulate.click(clearNode);
      assert(result);
    });

});