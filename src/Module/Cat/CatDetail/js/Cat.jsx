import React from 'react'

const imgStyle = (obj) => {
  return {
    width:obj.width,
    height:obj.height,

  }
}

const Cat = (props) => {
  const {cat} = props
  return (
    <div>
      <h3>{cat.name}</h3><span> <h5> originated from {cat.origin} </h5> </span>
      <div className='image-container'>
        <span className='left-side-bar'>

        </span>
        <span className='middle-bar'>
          <img src={cat.image.url} style={{...imgStyle({width:800,height:600})}} />
        </span>
        <span className='right-side-bar'>

        </span>
      </div>
    </div>
  )
}

export default Cat