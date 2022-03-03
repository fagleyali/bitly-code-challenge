import Axios from 'axios'

let catList = [];
const getCats = async (cb) => {
    catList = await Axios.get('https://api.thecatapi.com/v1/breeds')
                            .then(res => res.data)

    if(cb instanceof Function){
        return cb(catList)
    }                      
                    
}

export default getCats;
  