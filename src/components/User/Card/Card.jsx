import React from 'react'

const Card = ({info}) => {
    return (
      <div>
        <p>Nombre: {info.name}</p>
        <p>Edad: {info.age}</p>
        <p>Email: {info.email}</p>
        <img src={info.url} alt={info.name} />
      </div>
    )
}

export default Card