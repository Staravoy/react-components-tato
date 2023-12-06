// глобальні імпорти
import react from 'react'
// локальні імпорти
import Profile from "./Profile/Profile";
// БД
import User from '../Data/user.json'

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
    </div>
    
  );
};

