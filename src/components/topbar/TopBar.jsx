import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return <div className='top'>
    <div className="top__Left">
    <i className="topIcon fab fa-facebook-square"></i>
    <i className="topIcon fab fa-twitter-square"></i>
    <i className="topIcon fab fa-github-square"></i>
    </div>
    <div className="top__Center">
      <ul className="top__list">
        <li className='topListItem'>HOME</li>
        <li className='topListItem'>ABOUT</li>
        <li className='topListItem'>CONTACT</li>
        <li className='topListItem'>WRITE</li>
        <li className='topListItem'>LOGOUT</li>
      </ul>
    </div>
    <div className="top__Right">
      <img className='top__image' src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
      <i className="topSearchIcon fas fa-search"></i>
    </div>
  </div>;
};

export default TopBar;
