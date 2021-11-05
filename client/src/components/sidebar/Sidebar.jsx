import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const response = await axios.get('/categories');
      setCats(response.data);
    };
    getCats();
  }, []);
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src='https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg'
          alt=''
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum
          ab sint praesentium, numquam iure facere voluptatibus saepe laboriosam
          ex facilis aliquam ducimus dolorum, voluptatem iste suscipit? Unde,
          accusamus ad?
        </p>
      </div>
      <div className='sidebar'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map((category) => (
            <Link className='link' to={`/?cat=${category.name}`}>
              <li className='sidebarListItem'>{category.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-twitter-square'></i>
          <i className='sidebarIcon fab fa-github-square'></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
