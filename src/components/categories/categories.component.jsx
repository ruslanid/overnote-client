import React from 'react';

import {} from './categories.styles';

const Categories = ({categories}) => (
  <div className="categories">
    {categories.map(({id, name}) => (
      <p key={id}>{name}</p>
    ))}
  </div>
);

export default Categories;