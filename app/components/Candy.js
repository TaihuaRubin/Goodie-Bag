import React from 'react';
import {Link} from 'react-router-dom';

const Candy = (props) => {
  const {name, imageUrl, id} = props.candy;
  return (
    <Link to={`/candies/${id}`}>
      <div>
        <img src={imageUrl} />
        <p>{name}</p>
      </div>
    </Link>
  )
}

export default Candy;
