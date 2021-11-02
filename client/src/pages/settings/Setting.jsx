import React from 'react';
import './Setting.css';
import Sidebar from '../../components/sidebar/Sidebar';

const Setting = () => {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Your Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img
              src='https://media.istockphoto.com/photos/side-view-longbeard-business-man-portrait-picture-id1074638206?b=1&k=20&m=1074638206&s=170667a&w=0&h=Plsz2gRhhTANAmsCHpjINnXU_GtaSAyFv7PlNTAe94Q='
              alt=''
            />
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon fas fa-user-circle'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type='text' placeholder='Shaun' />
          <label>Email</label>
          <input type='email' placeholder='shaun@gmail.com' />
          <label>Password</label>
          <input type='password' />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
