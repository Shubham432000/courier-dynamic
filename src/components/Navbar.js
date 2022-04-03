import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <div className='navbar1'>
        <ul className='navbar2'>
          <li>
            <Link className='navbar5' to='/'>AHER COURIER SERVICE</Link>
          </li>
          <li>
            <Link className='navbar3' to='/login'>Login</Link>
          </li>
          <li>
            <Link className='navbar4' to='/signup'>SignUp</Link>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar