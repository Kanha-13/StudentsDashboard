import React, { useEffect, useRef, useState } from 'react';

const MultiSelectInput = ({ options, title, value, onchange, placeText, name }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showOption, setShowOption] = useState(false);
  const inputRef = useRef(null);

  const handleAddOption = (optionKey) => {
    const option = options.find((opt) => opt.key === optionKey);
    if (option && !selectedOptions.includes(optionKey)) {
      setSelectedOptions([...selectedOptions, optionKey]);
      setInputValue('');
      inputRef.current.blur();
    }
  };

  const handleRemoveOption = (optionKey) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== optionKey));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const matchingOption = options.find(
        (option) =>
          option.title.toLowerCase() === inputValue.toLowerCase()
      );
      if (matchingOption) {
        handleAddOption(matchingOption.key);
      }
    }
  };

  const handleBlur = () => {
    setTimeout(() => setShowOption(false), 150);
  };

  const handleFocus = () => {
    setShowOption(true);
  };

  useEffect(() => {
    const selectedOptionString = selectedOptions.join(',');
    onchange(name, selectedOptionString);
  }, [selectedOptions]);

  useEffect(() => {
    if (value[name]) {
      setSelectedOptions(value[name].split(","))
    }
  }, [value[name]])

  return (
    <div className="mt-4 sm:mt-2 w-full md:w-[40%] lg:w-1/4 h-14 m-2 lg:m-6 relative">
      <div className="font-notoSans absolute -top-3.5 px-1 left-3 bg-white text-studentTableHeaderText">{title}</div>
      <div className="border-2 p-2 rounded-lg border-gray-200 focus-within:border-blue-500">
        <div className="mt-1 flex flex-wrap items-center gap-2 h-full overflow-auto max-h-32">
          {selectedOptions.map((optionKey, index) => (
            <div
              key={index + optionKey+"-selected-course"}
              className="flex items-center bg-studentTableHeaderText text-white px-3 py-1 rounded-full"
            >
              <span>{options.find((opt) => opt.key === optionKey)?.title}</span>
              <button
                type="button"
                onClick={() => handleRemoveOption(optionKey)}
                className="ml-2 text-xs font-semibold text-white"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className="p-1 px-2.5 outline-none border-none focus:ring-0 w-full"
          placeholder={placeText || 'Type to search...'}
        />
      </div>

      {showOption && (
        <div
          className="mt-2 bg-white border rounded-lg shadow-md max-h-60 overflow-auto"
          onMouseDown={(e) => e.preventDefault()}
        >
          {options
            .filter(
              (option) =>
                !selectedOptions.includes(option.key) &&
                option.title.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((option, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  handleAddOption(option.key);
                  setShowOption(false);
                }}
              >
                {option.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectInput;
