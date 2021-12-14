import React, { Component } from "react";
import List from '../List'

export class Main extends Component {
  render() {
    return (
      <main>
        <h1>TO DO LIST</h1>
        <h3>Agrega tus tareas pendientes</h3>
        <List/>
      </main>
    )
  }
}

export default Main;
