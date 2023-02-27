import React from 'react';
import Button from '@/components/common/Button';
import './index.css';

const Toast = (props) => {
  const {
    status, message, onClose,
  } = props;

  return (
    <div className="toast">
      <div className={`notification ${status}`}>
        <div className="message">
          <p className="status">{status}</p>
          <p className="content">{message}</p>
        </div>
        <Button
          onClick={onClose}
          typeButton="button"
          className="btn btn-close"
          text="X"
        />
      </div>
    </div>
  );
};

export default Toast;
