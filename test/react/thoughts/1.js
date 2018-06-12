// Here, the only reason we serialize the instance is due to
// a bound function that accidentally gets passed to a host node
// in a spread.

require("react");

__evaluatePureFunction(function() {
  const React = require('react');

  function Button(props) {
    return <div {...props}>{props.renderChildren()}</div>;
  }

  class App extends React.Component {
    handleClick() {
      alert('hello');
    }
    renderChildren() {
      return <span>{this.props.foo}</span>;
    }
    render() {
      var props = Object.assign({}, {
        onClick: this.handleClick.bind(this),
        renderChildren: this.renderChildren.bind(this)
      });
      return <Button {...props} />;  
    }
  }

  __optimizeReactComponentTree(App, {
    firstRenderOnly: true
  })

  module.exports = App;
  
});
