import React from "react";
import { Menu, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./Categories.scss";

import AddCategory from "../add-category/AddCategory";
import Category from "../category/Category";

import {
  deleteCategory,
  toggleEditHidden,
  updateActiveCategory,
} from "../../redux/categories/categoriesActions";

import {
  selectIsDeleting,
  selectEditHidden,
  selectActiveCategory,
  selectAllCategories,
} from "../../redux/categories/categoriesSelectors";

const Categories = ({
  categories,
  activeCategory,
  dispatch,
  isDeleting,
  editHidden,
}) => {
  const handleItemClick = (error, { name }) => {
    dispatch(updateActiveCategory(name));
  };

  const handleDelete = (category) => {
    dispatch(deleteCategory(category));
  };

  const handleEdit = (toggleValue) => {
    dispatch(toggleEditHidden(toggleValue));
  };

  return (
    <div className="Categories">
      <Menu vertical>
        <AddCategory />
        <Menu.Item>
          <Header as="h3" color="grey">
            Categories
          </Header>
        </Menu.Item>
        {categories.length === 0 && <Menu.Item>Loading...</Menu.Item>}
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
  categories: selectAllCategories,
  activeCategory: selectActiveCategory,
  isDeleting: selectIsDeleting,
  editHidden: selectEditHidden,
});

export default connect(mapStateToPros)(Categories);
