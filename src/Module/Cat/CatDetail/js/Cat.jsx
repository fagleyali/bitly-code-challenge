import React, { useState, useEffect } from 'react'
import { getCat } from '../../../../Utils/ApiServices/catApi'
import Rating from '../../../../Component/Raing/js/Rating'
import {RATING_ARRAY} from '../../../../Utils/Constants/constants'
import '../css/cat.css'

const imgStyle = (obj) => {
  return {
    width:obj.width,
    height:obj.height,

  }
}

const Cat = (props) => {
  const [cat, setCatDetail] = useState({})
  const [error, setError] = useState('')
  useEffect(() => {
    const {cat} = props;
    const searchStr = window.location.search
    const lastIndex = searchStr.indexOf('breed_id');
    const breedId = lastIndex > -1 ? searchStr.substring(lastIndex + 9) : '';
    const catName = window.location.search.substring(6,lastIndex - 1)
    if(cat && cat.name && decodeURIComponent(catName) === cat.name){
      setCatToState(cat)
    }else if(cat && decodeURIComponent(catName) !== cat.name && breedId){
      getCat((catObject)=>setCatToState(createCatObject(catObject)),breedId)
    }
    return () => {
    };
  },[props])

  const setCatToState = (catObject) => {
    try {
      setCatDetail(catObject);
      
    } catch (error) {
      setError(error)
      props.getError(error)
    }
  }

  const createCatObject = (data) => {
    let catObj = {}
    if(data && data.breeds && data.breeds.length > 0){
      catObj = {
        ...data.breeds[0],
        image:{
          id:data.id,
          url:data.url,
          width:data.width,
          height:data.height
        }
      }
    }
    return catObj;
  }

  return (
    <div>
      <h3>{cat.name}</h3><span> <h5> originated from {cat.origin} </h5> </span>
      <div className='image-container'>
        <span className='middle-bar'>
          <img src={cat && cat.image && cat.image.url} style={{...imgStyle({width:800,height:600})}} alt='cat-detail' />
        </span>
      </div>
      <div className='cat-description'>
        {cat.description}
      </div>
      <div className='cat-temperament'>
        {cat.temperament}
      </div>
      <div className='rating-section'>
          {
            RATING_ARRAY.map(rating => (
              cat[rating] > 0  &&
              <div key={rating} className='rating-container' >
                <span> {rating}  </span>
                <Rating
                  value={cat[rating]}
                  color='#61dafb'
                 />
              </div>
            ))
          }
      </div>
      <div className='wikipedia'>
        <a href={cat.wikipedia_url}> Wikipedia</a>
      </div>
      
    </div>
  )
}

export default Cat