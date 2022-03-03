import React, {useState, useEffect} from 'react'
import getCats from '../../../../Utils/ApiServices/catApi'

const Cats = () => {
    const [catList, setCatList] = useState([])
    useEffect(() => {
            getCats((data)=> setCatList(data))
      return () => {
        
      };
    }, [])

  return (
      <div style={{display:'flex', flexFlow:'row wrap'}} >
          {catList && catList.length > 0 && catList.map(cat=>(
              <div style={{display:'flex',flexFlow:'column wrap',alignContent:'flex-start',margin:10, flex:'1 30%', border:'1px solid #757575',borderRadius:'4px'}}>
                  <img style={{width:'100%',height:250}} src={cat.image && cat.image.url} alt="cat_breed_image" />
                    <span style={{maxWidth:200, textAlign:'left'}}  key={cat.id + cat.name}> {cat.name} </span>
                    <span style={{maxWidth:200, textOverflow:'ellipsis', textAlign:'left',overflow:'hidden',whiteSpace:'nowrap'}}  key={cat.id + cat.description}> {cat.description} </span>
              </div>
          ))}
      </div>
    

  )
}

export default Cats