import React, {useState} from 'react'
import Navbar from './Component/Navbar/js/Navbar'
import Cats from './Module/Cat/CatList/js/Cats'
import Cat from './Module/Cat/CatDetail/js/Cat'
import Error from './Component/Error/js/Error'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  const [selectedCat, setSelectedCat] = useState({})
  const [error, setError] = useState('')
  const getSelectedCat = (catObj) => {
    if(Object.keys(catObj).length > 0){
      setSelectedCat(catObj)
    }
  }
  const handleError = (err) => {
    if(!err) return null
    setError(err)
    console.log(err)
  }
  return (
    <Router>
      <div className="App">
        <Navbar />
        {!error && 
          <Routes>
            <Route path='/' element={<Cats getCat={getSelectedCat} getError={handleError} />} />
            <Route path='/cat-detail' element={<Cat cat={selectedCat} getError={handleError} />} />
            <Route path='/error' element={<Error />} />
          </Routes>
        }
      </div>
    </Router>
  );
}

export default App;
