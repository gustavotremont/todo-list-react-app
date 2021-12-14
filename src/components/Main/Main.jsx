import React, { Component } from 'react'
import List from '../List';

export default class Main extends Component {
  render() {
    return (
      <main>
        <h1>To Do List</h1>
        <h3>Escribe tus tareas</h3>
        <List/>
      </main>
    )
  }
}
