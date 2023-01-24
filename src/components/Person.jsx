import React from 'react'

const Person = ({ name, age, color }) => {

    // const { name, age } = props;
  return (
    <div className='person' style={{
         backgroundColor: color,
    }}>
        <h3>Nombre: {name}</h3>
        <p>Edad: {age}</p>
    </div>
  )
}

export default Person;