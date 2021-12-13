import React, { Component } from "react";
import Item from "./Item";

class List extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      itemList: []   
    }
  }

  createItem = task => this.setState({itemList: [...this.state.itemList, task]})

  handleSubmit = event => {
    event.preventDefault();

    const task = event.target.task.value
    this.createItem(task)
  }

  paintItems = () => {
    return this.state.itemList.map((task, i) => <Item task={task} delete={() => this.deleteItem(i)} key={i} />)
  }

  deleteAllItems = () => this.setState({ itemList: [] })
    
  deleteItem = i => {
      const items = this.state.itemList.filter((task, j) => j !== i)
      this.setState({ itemList: items })
  }

  resetAllItems = () => {
    const tempList = this.state.itemList
    this.setState({ itemList: [] })
    this.setState({ itemList: tempList })
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="task">Tarea: </label>
            <input type="text" id="task" name="task"/>

            <input type="submit" value="Añadir Tarea" />
        </form> 
        <button onClick={this.deleteAllItems}>Borrar todas las tareas</button>
        <button onClick={this.resetAllItems}>Limpia las tareas</button>

        {this.paintItems()}
      </section>
    )
  }
}

export default List;
