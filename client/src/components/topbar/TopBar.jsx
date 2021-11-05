import React, { useContext } from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const TopBar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <div className='top'>
      <div className='top__Left'>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-github-square'></i>
      </div>
      <div className='top__Center'>
        <ul className='top__list'>
          <li className='topListItem'>
            <Link to='/' className='link'>
              Home
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/about' className='link'>
              About
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/contact' className='link'>
              Contact
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/write' className='link'>
              Write
            </Link>
          </li>
          <li className='topListItem' onClick={handleLogout}>
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className='top__Right'>
        {user ? (
          <Link to='/'>
            <img className='top__image' src={user.profilePic} alt='' />
          </Link>
        ) : (
          <ul className='top__list'>
            <li className='topListItem'>
              <Link to='/login' className='link'>
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link to='/register' className='link'>
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
};

export default TopBar;
