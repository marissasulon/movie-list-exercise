import React from 'react';

const Search = ( { onChange, value } ) => {
  return(
    <form>
      <input type="text" placeholder="Search..." value={value} onChange={onChange}></input>
    </form>
  )
}

export default Search;
