import React from 'react';
import userIcon from '@/assets/images/user-icon.png';
import closeButton from '@/assets/images/iconButton/btn-close.png';
import Button from '../common/Button';

import './index.css';

const UserCard = (props) => {
  const { username, onCloseUserCard } = props;
  const handleLogout = () => {

  };
  return (
    <div className="user">
      <div className="user-card">
        <img className="user-icon" src={userIcon} alt="user" />
        <span className="user-name">{username}</span>
        <Button
          type="button"
          className="btn-cart"
          text="Logout"
          onClick={handleLogout}
        />
        <Button
          onClick={onCloseUserCard}
          type="button"
          className="btn btn-close"
          icon={closeButton}
        />
      </div>
    </div>
  );
};

export default UserCard;
