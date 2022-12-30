import React, { useState, useEffect } from "react";
import Product from "./Product";
import Category from "./Category";

function Products() {
  const [productCategory, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProdCategory = () => {
    fetch("https://fakestoreapi.com/products/categories/")
      .then((response) => response.json())
      .then((json) => {
        setCategory(json);
      });
  };
  const getProducts = () => {
    setLoading(true);
    const fetchData = fetch("https://fakestoreapi.com/products/");
    fetchData
      .then((response) => response.json())
      .then((res) => {
        setLoading(false);
        setProducts(res)
      }
    )
  };
  useEffect(() => {
    getProdCategory();
    getProducts();
  }, []);
  return (
    <div>
      <h2 className="shop">SHOP</h2>
      <div>
        {productCategory.map((categ, index) => {
          return (
            <div key={index}>
              <Category categ={categ} />
              {loading ? (
                <div
                  className="spinner-grow mx-auto"
                  style={{ width: "3rem", height: "3rem" }}
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <div className="row justify-content-center new">
                  {products.map((prod) => {
                    return prod.category === categ ? (
                      <Product prod={prod} key={prod.id} />
                    ) : (
                      ""
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Products;
