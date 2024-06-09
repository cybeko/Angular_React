import React from 'react';
import { Link } from 'react-router-dom';
import pages from '../pagesPaths';
import './Navbar.css';


function Navbar() {
  return (
    <nav>
      <ul>
        {pages.map((page, index) => (
          <div className='div-items'>
            <Link key={index} to={page.path} >
              <li className='page-items'>
                <p>{page.name}</p>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
