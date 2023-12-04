import React from 'react';
import User from '../../Data/user.json'

const Profile = () => {
    return (<div class="profile">
  <div class="description">
    <img
      src={User.avatar}
      alt="User avatar"
      class="avatar"
    />
            <p class="name">{User.username}</p>
    <p class="tag">{User.tag}</p>
            <p class="location">{User.location}</p>
  </div>

  <ul class="stats">
    <li>
        <span class="label">Followers: </span>
        <span class="quantity">{User.stats.followers}</span>
    </li>
    <li>
        <span class="label">Views</span>
        <span class="quantity">{User.stats.views}</span>
    </li>
    <li>
        <span class="label">Likes</span>
        <span class="quantity"> {User.stats.likes}</span>
    </li>
  </ul>
</div>);
};

export default Profile