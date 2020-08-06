import React, {useState} from 'react';
import { Menu } from 'semantic-ui-react';

import './categories.styles.scss';

const Categories = ({categories}) => {
  
  const [activeCategory, setActiveCategory] = useState("");

  const handleItemClick = (e, {name}) => setActiveCategory(name);
  
  return (
    <div className="categories">
      <Menu text vertical>
        <Menu.Item header>Categories</Menu.Item>
        {
          categories.length === 0 ? 
          <div className="empty">* No categories yet</div>
          :
          null
        }
        {categories.map(({id, name}) => (
          <Menu.Item
            key={id}
            name={name}
            active={activeCategory === name}
            onClick={handleItemClick}
          />
        ))}
      </Menu>
    </div>
  )
};

export default Categories;