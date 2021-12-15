import React, { Component } from "react";
import Form from './Form'
import Card from './Card'

export default class User extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       userData: {}
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const userData = {
      name: event.target.name.value,
      age: event.target.age.value,
      email: event.target.email.value,
      url: event.target.url.value
    }

    this.setState({userData})
  }
  
  render() {
    return (
      <div>
        <Form submit={this.handleSubmit}/>
        <Card info={this.state.userData}/>
      </div>
    )
  }
}

