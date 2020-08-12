import React from "react";
import { Menu, Icon } from "semantic-ui-react";

import "./Category.scss";

const Category = ({
  category,
  activeCategory,
  handleItemClick,
  handleDelete,
  isDeleting,
}) => {
  const { title } = category;

  return (
    <div className="Category">
      <Menu.Item
        name={category}
        active={activeCategory === category}
        onClick={handleItemClick}
      >
        {title}
        {title !== "Others" && (
          <Icon
            name="times"
            color="red"
            onClick={() => handleDelete(category)}
            disabled={isDeleting && activeCategory === category}
          />
        )}
        {title !== "Others" && <Icon name="pencil" color="blue" />}
      </Menu.Item>
    </div>
  );
};

export default Category;
