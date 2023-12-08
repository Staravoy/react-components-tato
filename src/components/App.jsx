// глобальні імпорти
import react from 'react'
// локальні імпорти
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics"
import FriendList from './Friends/Friends'
// стилі
import s from './App.css'
// БД
import User from '../Data/user.json'
import data from '../Data/data.json'
import friend from '../Data/friends.json'

export const App = () => {
  return (
    <div>
      <Profile
        userName={User.username}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        stats={User.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friend} />
    </div>
  );
};

