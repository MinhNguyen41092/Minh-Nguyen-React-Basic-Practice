// Import react
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import image
import userIcon from '@/assets/images/user-icon.png';
import closeButton from '@/assets/images/iconButton/btn-close.png';
import Button from '@/components/common/Button';

// Import constant
import ROUTE from '@/constants/route';

// Import context
import { useAuth } from '@/contexts/AuthProvider';

// Import file css
import './index.css';

const UserCard = (props) => {
  const { onCloseUserCard } = props;
  const { userData, setUserData } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    const user = {
      userId: '',
      username: '',
      email: '',
    };
    setUserData(user);
    localStorage.removeItem('auth');
    navigate(ROUTE.LOGIN);
  };

  return (
    <div className="user-card">
      <div className="user-information">
        <div className="main">
          <img className="user-icon" src={userIcon} alt="user" />
          <p className="user-name">{userData.username}</p>
          <p className="user-email">{userData.email}</p>
          <Button
            typeButton="button"
            className="btn-logout"
            text="Logout"
            onClick={handleLogout}
          />
          <Button
            onClick={onCloseUserCard}
            typeButton="button"
            className="btn btn-close"
            icon={closeButton}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
