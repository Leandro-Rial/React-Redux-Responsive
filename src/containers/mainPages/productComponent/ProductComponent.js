import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="products" key={id}>
        <Link to={`/product/${id}`}>
          <div className="cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <h1 className="header">{title}</h1>
                <span className="price">$ {price}</span>
                <p className="category">{category}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="cards-products">{renderList}</div>;
};

export default ProductComponent;
