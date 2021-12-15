// import React, { Component } from 'react'

// export default class WetherCard extends Component {
//   render() {
//     return (
//       <div>
        // <p>Fecha: {this.props.forecast.date}</p>
        // <p>Temperatura: {this.props.forecast.temperature}</p>
        // <p>Clima: {this.props.forecast.clime}</p>
//       </div>
//     )
//   }
// }

import React, { Fragment }  from 'react'

const WeatherCard = ({info}) => {
  return (
    <div>
      {
        info.map(forecast => 
            <Fragment key={forecast.key} >
               <p>Fecha: {forecast.date}</p>
              <p>Temperatura: {forecast.temperature}</p>
              <p>Clima: {forecast.clime}</p>
            </Fragment>
        )
      }
    </div>
  )
}

WeatherCard.defaultProps = {
  info: []
}

export default WeatherCard