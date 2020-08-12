import React, { useState } from "react";
import { Menu, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./Categories.scss";

import AddCategory from "../add-category/AddCategory";
import Category from "../category/Category";

import { deleteCategory } from "../../redux/categories/categoriesActions";
import { selectIsDeleting } from "../../redux/categories/categoriesSelectors";

const Categories = ({ categories, dispatch, isDeleting }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleItemClick = (error, { name }) => setActiveCategory(name);

  const handleDelete = (category) => {
    dispatch(deleteCategory(category));
  };

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
        {categories.map((category) => (
          <Category
            key={category.id}
            activeCategory={activeCategory}
            handleItemClick={handleItemClick}
            category={category}
            handleDelete={handleDelete}
            isDeleting={isDeleting}
          />
        ))}
      </Menu>
    </div>
  );
};

const mapStateToPros = createStructuredSelector({
  isDeleting: selectIsDeleting,
});

export default connect(mapStateToPros)(Categories);
