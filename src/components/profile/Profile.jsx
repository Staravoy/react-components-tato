import React from 'react';
import User from '../../Data/user.json'
import styles from "./Profile.modul.css"

const Profile = () => {
    return (<div className="profile">
  <div className="name">
    <img
      src={User.avatar}
      alt="User avatar"
      className="avatar"
    />
        <p className="name">{User.username}</p>
            <p className="tag">@{User.tag}</p>
        <p className="location">{User.location}</p>
  </div>

  <ul className="stats">
    <li className='statsData'>
        <span className="label">Followers: </span>
        <span className="quantity">{User.stats.followers}</span>
    </li>
    <li className='statsData'>
        <span className="label">Views: </span>
        <span className="quantity">{User.stats.views}</span>
    </li>
    <li className='statsData
    '>
        <span className="label">Likes:</span>
        <span className="quantity"> {User.stats.likes}</span>
    </li>
  </ul>
</div>);
};

export default Profile