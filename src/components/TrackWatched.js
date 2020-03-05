import React from 'react';

const TrackWatched = ( {id, onClick, className} ) => {
  return(
    <span id={id} onClick={onClick} className={(className)}>{className.toString()}</span>
  )
}

export default TrackWatched;
