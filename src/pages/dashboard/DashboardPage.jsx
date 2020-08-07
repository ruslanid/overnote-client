import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./DashboardPage.scss";

import Categories from "../../components/categories/Categories";
import Notes from "../../components/notes/Notes";

import { fetchCategories } from "../../redux/categories/categoriesActions";
import { selectAllCategories } from "../../redux/categories/categoriesSelectors";

const DashboardPage = ({ dispatch, categories }) => {
  useEffect(() => {
    dispatch(fetchCategories());
  }, [fetchCategories]);

  return (
    <div className="DashboardPage">
      <Categories categories={categories} />
      {/* <Notes /> */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectAllCategories
});

export default connect(mapStateToProps)(DashboardPage);
