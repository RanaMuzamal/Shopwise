import React, { useEffect, useState } from "react";
import { AddProduct, DelteProduct } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

function Product({ prod }) {
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(AddProduct(product));
  };
  return (
    <div className="card d-block text-center m-3" style={{ width: "18rem" }}>
      <img src={prod.image} className="card-img" alt="" />
      <div className="card-body ">
        <p className="card-text">{prod.title}</p>
        <h6 className="card-text">${prod.price}</h6>
        <a
          href="#"
          className="btn btn-primary"
          onClick={() => addProduct(prod)}
        >
          ADD TO CART
        </a>
      </div>
    </div>
  );
}

export default Product;
