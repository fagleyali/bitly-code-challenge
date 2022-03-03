import Axios from 'axios'

const getCats = () => {
    const catList = Axios.get('https://api.thecatapi.com/v1/breeds')
                            .then(res=>res.data)
                            .catch(err=>console.log(err))
                            .then(final=>console.log(final))
    return catList
                    
}

export default getCats;
  