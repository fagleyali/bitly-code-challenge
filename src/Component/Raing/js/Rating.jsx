import React, {useState,useEffect} from 'react'
import ReactStars from 'react-rating-stars-component'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
import '../css/rating.css'

const Rating = ({value, color}) => {
    const [rating, setRating] = useState()
    useEffect(() => {
        setRating(value)
        console.log(typeof value)
      return () => {
        
      };
    }, [])
    const ratingChanged = (newRating) => {
        setRating(newRating)
    };
  return (
    <div className='rating-div' data-rating={value} style={{backgroundColor:color}} ></div>
  )
}

export default Rating