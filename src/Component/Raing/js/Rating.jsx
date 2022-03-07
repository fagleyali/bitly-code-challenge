import React from 'react'
import '../css/rating.css'

const Rating = ({value, color}) => {
  return (
    <div className='rating-div' data-rating={value} style={{backgroundColor:color}} ></div>
  )
}

export default Rating