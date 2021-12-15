import axios from 'axios';
import React, { Component } from 'react';
import WetherCard from './WetherCard';

import { v4 as uuidv4 } from 'uuid';

export default class WetherList extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       cityName: '',
       cityWeather: []
    }
  }

  weatherApi = async (city) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`)
    const data = resp.data

    const cityName = data.city.name
    
    const cityWeatherArray = data.list.map( element => {
                        return {
                          key: uuidv4(),
                          date: element.dt_txt,
                          temperature: element.main.temp,
                          clime: `${element.weather[0].main}, ${element.weather[0].description}`
                        }
    })

    const cityWeather = cityWeatherArray.slice(0, 5)
  
    this.setState({cityName});
    this.setState({cityWeather});
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();

    const city = event.target.city.value

    await this.weatherApi(city);
  }

  // paintCityWeather = () => {
  //   return this.state.cityWeather.map((forecast) => {
  //     const newkey = uuidv4();
  //     return <WetherCard forecast={forecast} key={newkey} />
  //   })
  // }

  async componentDidMount() {
    const city = 'Madrid';
    await this.weatherApi(city);
  }
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="city">Ciudad</label>
          <input type="text" name="city" id="city" />

          <input type="submit" value="Buscar" />
        </form>

        <section>
          {this.state.cityName !== '' ? <p>{this.state.cityName}</p> : null}
          {/* {this.paintCityWeather()} */}
          <WetherCard info={this.state.cityWeather}/>
        </section>

      </div>
    )
  }
}
