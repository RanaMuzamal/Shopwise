import React from "react";

function Category({ categ }) {
  return <h4 className="categoryType">{categ.toUpperCase()}</h4>;
}

export default Category;
