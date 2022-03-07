import Axios from 'axios'


Axios.defaults.headers.common['x-api-key'] = process.env.api_key

let catList = [];
export const getCats = async (cb, cbe) => {
    catList = await Axios.get('https://api.thecatapi.com/v1/breeds')
                            .then(res => res.data).catch(err => console.log(err))

    if(cb instanceof Function){
        return cb(catList)
    }                      
                    
}

export const getCat = async (cb, id) => {
  const  cat = await Axios.get(`https://api.thecatapi.com/v1/images/search?breed_id=${id}`)
                .then(res => res.data).catch(err => console.log(err))

    if(cb instanceof Function){
        return cb(...cat)
    }                      
                    
}


  