import axios from 'axios';
import React, { Component } from 'react'
import WetherCard from './WetherCard';


export default class WetherList extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       cityWeather: '',
       API_KEY: '80d07c1da72d4b69681e965831dab44d'
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("******STATE*******");
    console.log('viejo', prevState.cityWeather);
    console.log('nuevo', this.state.cityWeather);
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();

    const cityName = event.target.city.value

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.state.API_KEY}`)
    console.log(resp);
  
    this.setState({cityWeather: cityName});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="city">Ciudad</label>
          <input type="text" name="city" id="city" />

          <input type="submit" value="Buscar" />
        </form>
      </div>
    )
  }
}
