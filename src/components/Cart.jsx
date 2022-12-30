import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  AddProduct,
  DelteProduct,
  DelteAllProduct,
} from "../redux/actions/index";
import EmptyCart from "../assets/EmptyCart.svg";
import { NavLink } from "react-router-dom";

function Cart() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const delProduct = (product) => {
    dispatch(DelteProduct(product));
  };
  const addProduct = (product) => {
    dispatch(AddProduct(product));
  };
  const delAllProduct=(product)=>{
    dispatch(DelteAllProduct(product));
  }
  function allProducts() {
    const sum = state.reduce((s, { price, qty }) => s + price * qty, 0);
    return sum;
  }
  allProducts();
  return (
    <Container>
      {state.length === 0 ? (
        <div className="empty">
          <div className="row justify-content-center ">
            <img
              src={EmptyCart}
              alt="Empty Cart Image"
              style={{ height: "250px", width: "250px" }}
              className="cartImg"
            />
            <h3 className="CartisEmpty">Cart is Empty</h3>
          </div>
          <NavLink to="/" className="btn btn-primary mx-auto">
            CONTINUE SHOPPING
          </NavLink>
        </div>
      ) : (
        <div className="container-fluid">
          <h2 className="shop">Checkout Cart</h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {state.map((pro) => {
                
                  return (
                    <tr className="align-content-center" key={pro.id}>
                      <th scope="row">
                        <img
                          src={pro.image}
                          alt={pro.title}
                          height="100px"
                          width="100px"
                          className="cartImg1"
                        />
                      </th>
                      <td >{pro.title}</td>
                      <td>
                        <a onClick={() => delProduct(pro)}>
                          <i className="fa fa-angle-left"></i>
                        </a>{" "}
                        {pro.qty}{" "}
                        <a onClick={() => addProduct(pro)}>
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </td>
                      <td>${pro.price}</td>
                      <td>
                        <a
                          href="#"
                          onClick={() => delAllProduct(pro)}
                        >
                          X<i className="fa fa-solid fa-xmark remove"></i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div
            className="d-flex align-items-end flex-column bd-highlight mb-3"
            style={{ height: "200px" }}
          >
            <div className="p-2 bd-highlight">
              <h5 className="d-flex justify-content-end">Total: {allProducts()}</h5>
            </div>
            <div className="p-2 bd-highlight"></div>
            <a href="/" className="d-flex justify-content-end btn btn-primary">
              PROCEED TO CHECKOUT
            </a>
          </div>
        </div>
      )}
    </Container>
  );
}
export default Cart;
