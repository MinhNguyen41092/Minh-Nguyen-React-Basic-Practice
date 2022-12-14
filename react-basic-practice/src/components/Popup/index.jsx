import React from 'react';
import Button from '../common/button';

function Popup(props) {
  const {
    className, status, icon, message,
  } = props;

  return (
    <div className="notification toast">
      <Button
        className="btn btn-close"
        text="X"
      />
      <div className={className}>
        <img src={icon} alt="" />
      </div>
      <div>
        <p className="notification-title">{status}</p>
        <p className="notification-message">{message}</p>
      </div>
    </div>
  );
}

export default Popup;
