import React from 'react';
import Button from '../common/Button';
import './index.css';

const Popup = (props) => {
  const {
    isSuccess, message, onClose,
  } = props;

  return (
    <div className="popup">
      {
        isSuccess
          ? (
            <div className="notification success">
              <div className="message">
                <p className="title">Success</p>
                <p className="content">{message}</p>
              </div>
              <Button
                onClick={onClose}
                type="button"
                className="btn btn-close"
                text="X"
              />
            </div>
          )
          : (
            <div className="notification fail">
              <div className="message">
                <p className="title">Fail</p>
                <p className="content">{message}</p>
              </div>
              <Button
                type="button"
                className="btn btn-close"
                text="X"
              />
            </div>
          )
      }
    </div>
  );
}

export default Popup;
