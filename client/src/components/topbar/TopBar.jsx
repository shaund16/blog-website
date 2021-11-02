import React from 'react';
import './TopBar.css';
import {Link} from 'react-router-dom';

const TopBar = () => {
  const user = false;
  return <div className='top'>
    <div className="top__Left">
    <i className="topIcon fab fa-facebook-square"></i>
    <i className="topIcon fab fa-twitter-square"></i>
    <i className="topIcon fab fa-github-square"></i>
    </div>
    <div className="top__Center">
      <ul className="top__list">
        <li className='topListItem'>
          <Link to='/' className='link'>Home</Link>
        </li>
        <li className='topListItem'><Link to='/about' className='link'>About</Link></li>
        <li className='topListItem'><Link to='/contact' className='link'>Contact</Link></li>
        <li className='topListItem'><Link to='/write' className='link'>Write</Link></li>
        <li className='topListItem'>
          {user && 'LOGOUT'}
        </li>
      </ul>
    </div>
    <div className="top__Right">
      {user ? (
        <img className='top__image' src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
      )
       :(
        <ul className="top__list">
        <li className="topListItem">
        <Link to='/login' className='link'>LOGIN</Link>
        </li>
        <li className="topListItem">
        <Link to='/register' className='link'>Register</Link>
        </li>
  
        </ul>
      )
      }
      <i className="topSearchIcon fas fa-search"></i>
    </div>
  </div>;
};

export default TopBar;
