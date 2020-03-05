import React from 'react';

const ToggleView = ( {onClick} ) => {
  return (
    <div id="button-div">
      <button id="watched" onClick={onClick}>Watched</button>
      <button id="unwatched" onClick={onClick}>Unwatched</button>
      <button id="all" onClick={onClick}>All Movies</button>
    </div>
  )
}

export default ToggleView;
