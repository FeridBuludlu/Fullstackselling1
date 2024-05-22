import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <div className='Header_main'>
        <div className='Header_left'>
            <a href="#">Selling</a>
            <span>.</span>
        </div>
        <div className='Header_right'>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/admin">Add</Link></li>
                <li><Link>About us</Link></li>
                <li><Link>Special</Link></li>
                <li><Link>Testimonials</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header