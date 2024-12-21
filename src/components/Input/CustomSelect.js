import React, { useState, useRef, useEffect } from 'react';

const CustomSelect = ({ value, options, placeText, name, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const selectRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const option = options.filter(option => option.key === value[name]);
    setSelectedValue(option[0]?.title);
  }, [value[name]])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        selectRef.current && !selectRef.current.contains(e.target) &&
        dropdownRef.current && !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleSelect = (option) => {
    setSelectedValue(option.title);
    onChange(name, option.key);
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      <div
        ref={selectRef}
        tabIndex="0"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-full p-4 px-4 border-2 border-gray-200 rounded-md cursor-pointer focus-within:border-blue-500"
      >
        {selectedValue || placeText}
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute w-full mt-1 bg-white border border-gray-200 rounded-md shadow-md max-h-60 overflow-auto z-10"
        >
          {options.map((option, index) => (
            <div
              key={`${name}-${index}-option`}
              onClick={() => handleSelect(option)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
