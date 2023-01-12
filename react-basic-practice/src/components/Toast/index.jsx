import React from 'react';
import Button from '../common/Button';
import './index.css';

const Toast = (props) => {
  const {
    status, message, onClose,
  } = props;

  const statusToast = () => {
    switch (status) {
      case 'success':
        return (
          <div className="notification success">
            <div className="message">
              <p className="status">Success</p>
              <p className="content">{message}</p>
            </div>
            <Button
              onClick={onClose}
              type="button"
              className="btn btn-close"
              text="X"
            />
          </div>
        );

      case 'error':
        return (
          <div className="notification fail">
            <div className="message">
              <p className="status">Fail</p>
              <p className="content">{message}</p>
            </div>
            <Button
              onClick={onClose}
              type="button"
              className="btn btn-close"
              text="X"
            />
          </div>
        );

      default:
        return (
          (
            <div className="notification fail">
              <div className="message">
                <p className="status">Warning</p>
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
        );
    }
  };

  return (
    <div className="toast">
      {
        statusToast()
      }
    </div>
  );
};

export default Toast;
