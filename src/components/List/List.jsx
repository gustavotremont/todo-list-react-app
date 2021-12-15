import React, { Component } from "react";
import Item from "./Item";
import data from '../../data';

import { v4 as uuidv4 } from 'uuid';

class List extends Component {

  constructor(props) {
    super(props)

    this.timeout = 0
    
    this.state = {
      itemList: [],
      task: ""   
    }
  }

  createItem = task => this.setState({itemList: [...this.state.itemList, task]})

  handleSubmit = event => {
    event.preventDefault();

    const task = event.target.task.value;
    this.createItem(task);

    event.target.task.value = ''
  }

  handleChange = event => {
    this.setState({task: event.target.value})

    if(this.timeout) clearTimeout(this.timeout);

    if(event.target.value !== ''){
      this.timeout = setTimeout( () => {
        this.setState({task: ''})
        event.target.value = ''
      }, 5000);
    } 

  }

  paintItems = () => {
    return this.state.itemList.map((task, i) => {
      const newkey = uuidv4();
      return <Item task={task} key={newkey} delete={() => this.deleteItem(i)} />
    })
  }

  deleteAllItems = () => this.setState({ itemList: [] })
    
  deleteItem = i => {
      const items = this.state.itemList.filter((task, j) => j !== i)
      this.setState({ itemList: items })
  }

  resetAllItems = () => {
    this.setState({ itemList: data })
  }

  componentDidMount = () => {
    this.setState({ itemList: data })
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="task">Tarea: </label>
            <input type="text" id="task" name="task" onChange={this.handleChange}/>

            { this.state.task ? <input type="submit" value="Añadir Tarea"/> : null }

        </form> 
        <button onClick={this.deleteAllItems}>Borrar todas las tareas</button>
        <button onClick={this.resetAllItems}>Reset de tareas</button>

        {this.paintItems()}
      </section>
    )
  }
}

export default List;
