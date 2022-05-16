import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";
const Product = ({ name, image, price }) => {
  const url = image && image.url;
  return (
    <article className="product">
      <h4>{name || "Default Name"}</h4>
      <img src={url || defaultImage} alt={name || "Default Name"} />
      <p>${price || "3.99"}</p>
    </article>
  );
};
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
/* Product.defaultProps = {
  image: defaultImage,
  name: "default name",
  price: 3.99,
}; */

//rafcp is the shortcut for creating a react coomponent with propTypes
//you can use ptor for PropTypes.object.isRequired and likewise ptar, ptsr, ptnr for other prop types

export default Product;
