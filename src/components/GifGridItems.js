import React from 'react'
import 'animate.css';

export const GifGridItems = ( { id, title, url } ) => {
    return (
        <div className='card animate__animated animate__fadeInDown'>
            <img src={ url } alt= {title} />
            <p> { title } </p>
        </div>
    )
}
