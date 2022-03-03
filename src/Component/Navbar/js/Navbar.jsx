import React from 'react'
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
                    <a href='#'>List Page</a>
                </li>
                <li>
                    <a href='#'>Detail Page</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar