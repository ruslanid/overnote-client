import React, { useState } from "react";
import { Menu, Header } from "semantic-ui-react";

import "./Categories.scss";

const Categories = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState("");

  const handleItemClick = (e, { name }) => setActiveCategory(name);

  return (
    <div className="Categories">
      <Menu inverted vertical>
        <Menu.Item>
          <Header as="h3" color="red">
            Categories
          </Header>
        </Menu.Item>
        {categories.length === 0 ? (
          <div className="empty">* No categories yet</div>
        ) : null}
        {categories.map(({ id, name }) => (
          <Menu.Item
            key={id}
            name={name}
            active={activeCategory === name}
            onClick={handleItemClick}
          />
        ))}
      </Menu>
    </div>
  );
};

export default Categories;
