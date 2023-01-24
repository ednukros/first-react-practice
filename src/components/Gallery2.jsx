import React, { useState } from 'react'

const Gallery2 = ({ tittle, img }) => {

    let [color, setColor] = useState("red");

    const toggle = () => {

        color === "red" ? setColor("blue") : setColor("red");
    }

    return (
        <div className='gallery' onClick={toggle} style={{
            backgroundColor: color,
        }}>
            <h3>{tittle}</h3>
            <div className='img-container'>
                <img className='picture' src={img} alt="imagen de un cuadro de Picasso" />
            </div>
        </div>
    )
}

export default Gallery2