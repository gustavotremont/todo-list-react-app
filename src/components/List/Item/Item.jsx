import React, { Component } from "react";

export class Item extends Component {  

  render() {
    return (
      <div>
        <input type="checkbox"/>
        <label>{this.props.task}</label>
        <button onClick={this.props.delete}>Eliminar</button>
      </div>
    )
  }
}

export default Item;
