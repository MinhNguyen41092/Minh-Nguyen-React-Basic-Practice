import React from 'react';
import Button from '../common/Button';

function Popup(props) {
  const {
    className, status, icon, message,
  } = props;

  return (
    <div className="notification toast">
      <Button
        type="button"
        className="btn btn-close"
        text="X"
      />
      <div className={className}>
        <img src={icon} alt="icon" />
      </div>
      <div>
        <p className="notification-title">{status}</p>
        <p className="notification-message">{message}</p>
      </div>
    </div>
  );
}

export default Popup;
