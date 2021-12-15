import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <nav className='nav-bar'>
        <ul className='nav-list'>
          <li className='nav-item'><Link to="/">Home</Link></li>
          <li className='nav-item'><Link to="/todo">To Do List</Link></li>
          <li className='nav-item'><Link to="/weather">Weather</Link></li>
          <li className='nav-item'><Link to="/user">User</Link></li>
        </ul>
      </nav>
    )
  }
}
