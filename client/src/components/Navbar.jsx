import React from 'react'
import "../styles.scss";
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'

const cats = ["ART", "CINEMA", "SPORTS", "TECHNOLOGY", "DESIGN", "FOOD"]

const Navbar = () => {
  return (
    <nav className='flex-row-center'>
      <div className='logo'><img src={Logo} alt="" /></div>
      <div className='content flex-row-center'>

        <div className='cats flex-row-center'>
          {cats.map((cat, index) => (
            <Link key={index} to={`/?cat=${cat}`} className='link'><span >
              {cat}</span></Link>
          ))}
        </div>
        <span className='write'>WRITE</span>
        <div className='user flex-row-center'>
          <span>Nick</span>
          <span>LOGOUT</span>
        </div>
      </div>

    </nav>
  )
}

export default Navbar