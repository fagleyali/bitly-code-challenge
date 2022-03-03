import React, {useState, useEffect} from 'react'
import getCats from '../../../../Utils/ApiServices/catApi'

const Cats = () => {
    const [catList, setCatList] = useState([])
    useEffect(() => {
        if(getCats && Object.keys(getCats).length > 0){
            setCatList(getCats)
        }
      return () => {
        
      };
    }, [])

  return (
      <div>
          {catList.map(cat=>(
              <div key={cat.id}> {cat.name} </div>
          ))}
      </div>
    

  )
}

export default Cats