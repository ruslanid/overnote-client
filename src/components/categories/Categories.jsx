import React, { useState } from "react";
import { Menu, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./Categories.scss";

import AddCategory from "../add-category/AddCategory";
import Category from "../category/Category";

import {
  deleteCategory,
  toggleEditHidden,
} from "../../redux/categories/categoriesActions";

import {
  selectIsDeleting,
  selectEditHidden,
} from "../../redux/categories/categoriesSelectors";

const Categories = ({ categories, dispatch, isDeleting, editHidden }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleItemClick = (error, { name }) => setActiveCategory(name);

  const handleDelete = (category) => {
    dispatch(deleteCategory(category));
  };

  const handleEdit = (toggleValue) => {
    dispatch(toggleEditHidden(toggleValue));
  };

  return (
    <div className="Categories">
      <Menu inverted vertical>
        <Menu.Item>
          <Header as="h3" color="red">
            Categories
          </Header>
        </Menu.Item>
        <AddCategory />
        {categories.length === 0 && <Menu.Item>No categories</Menu.Item>}
        {categories.map((category) => (
          <Category
            key={category.id}
            activeCategory={activeCategory}
            handleItemClick={handleItemClick}
            category={category}
            handleDelete={handleDelete}
            isDeleting={isDeleting}
            editHidden={editHidden}
            handleEdit={handleEdit}
          />
        ))}
      </Menu>
    </div>
  );
};

const mapStateToPros = createStructuredSelector({
  isDeleting: selectIsDeleting,
  editHidden: selectEditHidden,
});

export default connect(mapStateToPros)(Categories);
