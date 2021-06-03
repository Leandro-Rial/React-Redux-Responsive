import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../../../redux/actions/productActions";
import Loading from '../utils/Loading/loading'

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const {image, title, price, category, description} = product;
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {console.log("Err", err)});

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [id])


  return (
    <div>
      {
        Object.keys(product).length === 0 ? (
          <Loading />
        ) : (
          <div className="details-page">
            <div className="detail-box">
              <div className="left-detail">
                <div className="image">
                  <img src={image} alt={title} />
                </div>
              </div>
              <div className="rigth-detail">
                <h1>{title}</h1>
                <span>$ {price}</span>
                <h3>{category}</h3>
                <p>{description}</p>
                <div className="cart">
                  <i className="fas fa-cart-plus"></i>
                  <h4>Add to Cart</h4>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default ProductDetails;
