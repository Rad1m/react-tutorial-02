import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/' className='button'>Home</Link>
        </li>
        <li>
          <Link to='/about' className='button'>About</Link>
        </li>
        <li>
          <Link to='/people' className='button'>People</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
