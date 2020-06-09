import React, {Component} from 'react'

class CoordinatesButton extends Component {

  handleClick = (e) => {
    let coords = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coords)
  }
  
  render() {
    return(
      <button onClick={this.handleClick}>Coordinates Button</button>
    )
  }
}

export default CoordinatesButton
