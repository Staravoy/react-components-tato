import React from 'react';
import styles from "./Profile.modul.css"

const Profile = ({ userName, tag, location, avatar, stats }) => {
  return (
   <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"/>
        <p className="name">{userName}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
    </div>

    <ul class="stats">
      <li className='statsData'>
        <span class="label">Followers:  </span>
        <span class="quantity">{stats.followers}</span>
      </li>
      <li className='statsData'>
        <span class="label">Views:  </span>
        <span class="quantity">{stats.views}</span>
      </li>
      <li className='statsData'>
      <span class="label">Likes:  </span>
          <span class="quantity">{stats.likes}</span>
      </li>
    </ul>
</div>
 )
}

export default Profile