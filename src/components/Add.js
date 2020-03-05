import React from 'react';

const Add = ({ onChange, value, onSubmit }) => {
  return(
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Add Movie..." onChange={onChange} value={value}></input>
    </form>
  )
}

export default Add;
