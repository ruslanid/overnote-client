import React, { useState } from "react";
import { Menu, Header } from "semantic-ui-react";

import "./Categories.scss";
import AddCategory from "../add-category/AddCategory";

const Categories = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState("");

  const handleItemClick = (error, { name }) => setActiveCategory(name);

  return (
    <div className="Categories">
      <Menu inverted vertical>
        <Menu.Item>
          <Header as="h3" color="brown">
            Categories
          </Header>
        </Menu.Item>
        <AddCategory />
        {categories.length === 0 && <Menu.Item>No categories</Menu.Item>}
        {categories.map(({ id, title }) => (
          <Menu.Item
            key={id}
            name={title}
            active={activeCategory === title}
            onClick={handleItemClick}
          />
        ))}
      </Menu>
    </div>
  );
};

export default Categories;
