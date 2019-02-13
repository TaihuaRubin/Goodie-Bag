import React from 'react';

const NotFound = (props) => {
  console.log('not found props', props);
  return (
    <div>The page at {props.location.pathname} does not exist!</div>
  )
}

export default NotFound
