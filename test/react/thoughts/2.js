// Here, even if we don't know what happens,
// we know methods are useless after rendering.
// How about we replace them with empty shims?

require("react");

__evaluatePureFunction(function() {
  const React = require('react');

  class App extends React.Component {
    handleClick() {
      alert('hello');
    }
    render() {
      var props = Object.assign({}, this.props, {
        onClick: this.handleClick.bind(this)
      });
      return <div onClick={props.onClick} />;  
    }
  }

  __optimizeReactComponentTree(App, {
    firstRenderOnly: true
  })

  module.exports = App;
  
});
