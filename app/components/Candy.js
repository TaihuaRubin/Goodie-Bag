import React from 'react';

const Candy = (props) => {
  const {name, imageUrl} = props.candy;
  return (
    <div>
      <img src={imageUrl} />
      <p>{name}</p>
    </div>
  )
}

export default Candy;
