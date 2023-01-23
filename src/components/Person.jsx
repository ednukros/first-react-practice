import React from 'react'

const Person = (props) => {

    const { name, age } = props;
  return (
    <div className='person' style={{
        backgroundColor: props.color,
    }}>
        <h3>Nombre: {name}</h3>
        <p>Edad: {age}</p>
    </div>
  )
}

export default Person;