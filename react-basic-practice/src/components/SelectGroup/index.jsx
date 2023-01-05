import React, { useState } from 'react';

const SelectGroup = (props) => {
  const { data, placeholder } = props;
  const [defaultTitle, setDefaultTitle] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (title) => {
    if (!isOpen) {
      document.addEventListener('click', handleOutsideClick(), false);
    } else {
      document.removeEventListener('click', handleOutsideClick(), false);
    }

    setIsOpen((prevState) => !prevState);
    setDefaultTitle(title);
  };

  const handleOpen = () => {
    setIsOpen((prevState) => ({
      isOpen: !prevState,
    }));
  };

  const handleOutsideClick = () => {
    handleSelect();
  };

  return (
    <div className="option">
      <div className="select-input" onClick={handleOpen}>
        <span
          className={`${
            placeholder && defaultTitle === '' ? 'select-title placeholder' : 'select-title'
          }`}
        >
          {defaultTitle === '' ? placeholder : defaultTitle}
        </span>
      </div>

      {isOpen ? (
        <div className="select-list">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => this.handleSelect(data[index].sportType, data[index].sportTitle)}
              className="select-item"
            >
              <span className="select-title">{item.sportTitle}</span>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default SelectGroup;
