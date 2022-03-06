import React, {useState, useEffect} from 'react'
import getCats from '../../../../Utils/ApiServices/catApi'
import { useNavigate } from 'react-router-dom'
import '../css/cats.css'

const Cats = (props) => {
    const [catList, setCatList] = useState([])
    const navigate = useNavigate()
    const {getCat} = props
    useEffect(() => {
            getCats((data)=> setCatList(data))
      return () => {
        
      };
    }, [])

  return (
      <div className='cats'>
          {catList && catList.length > 0 && catList.map((cat,id)=>(
              <div key={cat.id} className='img-container' onClick={()=> getCat(cat) && navigate('/cat-detail')} data-testid={`cat-breed-${id}`} >
                  <img src={cat.image && cat.image.url} alt="cat_breed_image"  />
                    <span className='cat-name'  key={cat.id + cat.name}> {cat.name} </span>
                    <button type='button' onClick={()=> navigate(`/cat-detail?name=${cat.name}`)}>More...</button>
              </div>
          ))}
      </div>
    

  )
}

export default Cats