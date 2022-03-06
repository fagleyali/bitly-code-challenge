import React, {useState} from 'react'
import Navbar from './Component/Navbar/js/Navbar'
import Cats from './Module/Cat/CatList/js/Cats'
import Cat from './Module/Cat/CatDetail/js/Cat'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  const [selectedCat, setSelectedCat] = useState({})
  const getSelectedCat = (catObj) => {
    if(Object.keys(catObj).length > 0){
      setSelectedCat(catObj)
    }
  }
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Cats getCat={getSelectedCat} />} />
          <Route path='/cat-detail' element={<Cat cat={selectedCat} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
