import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./AddCategory.scss";

import { addCategory } from "../../redux/categories/categoriesActions";
import {
  selectIsAdding,
  selectErrorsAdding,
} from "../../redux/categories/categoriesSelectors";

const AddCategory = ({ dispatch, isAdding, errors }) => {
  const [category, setCategory] = useState({
    title: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategory({ ...category, title: "" });
    dispatch(addCategory(category));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit} className="AddCategory">
      <Form.Input
        error={errors.title}
        action={{
          icon: "save",
          type: "submit",
          content: "Save",
          loading: isAdding,
          disabled: isAdding,
          color: "blue",
        }}
        placeholder="Add category..."
        name="title"
        value={category.title}
        onChange={handleChange}
      />
    </Form>
  );
};

const mapStateToProps = createStructuredSelector({
  isAdding: selectIsAdding,
  errors: selectErrorsAdding,
});

export default connect(mapStateToProps)(AddCategory);
