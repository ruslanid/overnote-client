import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./DashboardPage.scss";

import Categories from "../../components/categories/Categories";
import Notes from "../../components/notes/Notes";
import WithLoading from "../../components/with-loading/WithLoading";

import { selectFilteredNotes } from "../../redux/notes/notesSelectors";
import { fetchRecentNotes } from "../../redux/notes/notesActions";
import { fetchCategories } from "../../redux/categories/categoriesActions";

const NotesWithLoading = WithLoading(Notes);

const DashboardPage = ({ dispatch, areNotesLoaded }) => {
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchRecentNotes());
  }, [dispatch]);

  return (
    <div className="DashboardPage">
      <Categories />
      <NotesWithLoading isLoading={!Boolean(areNotesLoaded)} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  areNotesLoaded: selectFilteredNotes,
});

export default connect(mapStateToProps)(DashboardPage);
