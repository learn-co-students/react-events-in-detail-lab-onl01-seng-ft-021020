// Code CoordinatesButton Component Here
import React from 'react'

//React lets you define components as classes or functions. Components defined as classes currently provide more features which
// are described in detail on this page. To define a React component class, you need to extend React.Component:
export default class DelayedButton extends React.Component{
    handleClick = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
      };
    render(){
        return(<div><button onClick={this.handleClick}>Coords</button></div>)
    }
}