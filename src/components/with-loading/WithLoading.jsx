import React from "react";
import { Loader } from "semantic-ui-react";

import "./WithLoading.scss";

const WithLoading = (Component) => {
  return ({ isLoading, ...props }) =>
    isLoading ? (
      <div className="Loading">
        <Loader active size="huge" />
      </div>
    ) : (
      <Component {...props} />
    );
};

export default WithLoading;
