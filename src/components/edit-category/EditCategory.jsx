import React, { useState } from "react";
import { Button, Input, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  toggleEditHidden,
  updateCategory,
} from "../../redux/categories/categoriesActions";

import {
  selectErrorsUpdating,
  selectIsUpdating,
} from "../../redux/categories/categoriesSelectors";

const EditCategory = ({ category, dispatch, errors, isUpdating }) => {
  const { title } = category;

  const [updatedCategory, setUpdatedCategory] = useState({
    title,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedCategory({ ...category, [name]: value });
  };

  const handleSubmit = (event) => {
    if (category.title === updatedCategory.title) {
      dispatch(toggleEditHidden(true));
    } else {
      dispatch(updateCategory(updatedCategory));
    }
  };

  return (
    <div className="EditCategory">
      <Input
        type="text"
        name="title"
        value={updatedCategory.title}
        onChange={handleChange}
        action
        fluid
      >
        <input />
        <Button size="mini" onClick={() => handleSubmit()} disabled={isUpdating}>
          <Icon name="check" color="green" />
        </Button>
        <Button size="mini" onClick={() => dispatch(toggleEditHidden(true))}>
          <Icon name="cancel" color="red" />
        </Button>
      </Input>
      <p className="errors">{errors.title}</p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  errors: selectErrorsUpdating,
  isUpdating: selectIsUpdating,
});

export default connect(mapStateToProps)(EditCategory);
