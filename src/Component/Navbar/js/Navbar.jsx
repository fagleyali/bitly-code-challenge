import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div >
            <a className='brand' href='https://bitly.com'>Bitly</a>
        </div>
        <div >
            <ul className='breadcrumb'>
                <li>
                    <Link to="/">List Page</Link>
                </li>
                <li>
                    <Link to="/cat-detail">Detail Page</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar