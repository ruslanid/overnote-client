import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./DashboardPage.scss";

import Categories from "../../components/categories/Categories";
import Notes from "../../components/notes/Notes";
import WithLoading from "../../components/with-loading/WithLoading";

import { selectFilteredNotes } from "../../redux/notes/notesSelectors";
import { fetchAllNotes } from "../../redux/notes/notesActions";
import {
  fetchCategories,
  setActiveCategory,
} from "../../redux/categories/categoriesActions";
import { selectCategory } from "../../redux/categories/categoriesSelectors";

const NotesWithLoading = WithLoading(Notes);

const DashboardPage = ({ dispatch, areNotesLoaded, category, match }) => {
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllNotes());
  }, [dispatch]);

  useEffect(() => {
    if (category) {
      dispatch(setActiveCategory(category));
    }
  }, [dispatch, category]);

  return (
    <div className="DashboardPage">
      <Categories />
      <NotesWithLoading isLoading={!Boolean(areNotesLoaded)} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  areNotesLoaded: selectFilteredNotes(state),
  category: selectCategory(Number(ownProps.match.params.id))(state),
});

export default connect(mapStateToProps)(DashboardPage);
