// Code DelayedButton Component Here
import React from 'react';
//React lets you define components as classes or functions. Components defined as classes currently provide more features which
// are described in detail on this page. To define a React component class, you need to extend React.Component:
class DelayedButton extends React.Component {
  //its an on click event
  handleClick = event => {
    //
    event.persist();
    //asinc timeout
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    return <button onClick={this.handleClick}>Delayed</button>;
  }
}

export default DelayedButton; 