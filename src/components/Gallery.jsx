import React from 'react'

const Gallery = ({ tittle, img, bgColor }) => {
    return (
        <div className='gallery' style={{
            backgroundColor: bgColor,
        }}>
            <h3>{tittle}</h3>
            <div className='img-container'>
                <img className='picture' src={img} alt="imagen de un cuadro de Picasso" />
            </div>
        </div>
    )
}

export default Gallery