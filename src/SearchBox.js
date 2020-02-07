import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input 
        type="search" 
        className="pa2 ba2 b--green bg-lightest-blue"
        placeholder="search robots"
        onInput={searchChange}
      />
    </div>
  );
}

export default SearchBox;