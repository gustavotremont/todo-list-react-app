import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submit}>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          
          <label htmlFor="url">Imagen</label>
          <input type="url" name="url" id="url" />
          
          <label htmlFor="age">Edad</label>
          <input type="number" name="age" id="age" min="18" max="120" />

          <input type="submit" value="Registrar" />
        </form>
      </div>
    )
  }
}