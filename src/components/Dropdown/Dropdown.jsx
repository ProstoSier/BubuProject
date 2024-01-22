import React, { useState } from 'react';
import Select from 'react-select';

const Dropdown = () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <h3>Select an option:</h3>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
      {selectedOption && (
        <p>You selected: {selectedOption.label}</p>
      )}
    </div>
  );
};

export default Dropdown;