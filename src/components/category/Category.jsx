import React from "react";
import { Menu, Icon } from "semantic-ui-react";

import "./Category.scss";

import EditCategory from "../edit-category/EditCategory";

const Category = ({
  category,
  activeCategory,
  handleItemClick,
  handleDelete,
  isDeleting,
  editHidden,
  handleEdit,
}) => {
  const { title } = category;

  return (
    <div className="Category">
      {!editHidden && activeCategory === category ? (
        <EditCategory category={category} />
      ) : (
        <Menu.Item
          name={category}
          active={activeCategory === category}
          onClick={handleItemClick}
        >
          {title.length > 35 ? `${title.substring(0, 32)}...` : title}
          <Icon
            name="trash alternate outline"
            color="grey"
            onClick={() => handleDelete(category)}
            disabled={isDeleting && activeCategory === category}
          />
          <Icon name="pencil" color="grey" onClick={() => handleEdit(false)} />
        </Menu.Item>
      )}
    </div>
  );
};

export default Category;
