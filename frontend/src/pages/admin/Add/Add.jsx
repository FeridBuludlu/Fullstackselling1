import React from "react";
import Addproduct from "../../../components/admin/Addproduct/Addproduct";
import Helmet from "react-helmet"

const Add = () => {
  return (
    <div>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Addproduct />
    </div>
  );
};

export default Add;
