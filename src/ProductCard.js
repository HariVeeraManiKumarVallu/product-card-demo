import React from "react";
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const {
    image,
    name,
    price,
    variants,
    inStock
  } = product;

  return (
    <div className="card product-card h-100 shadow-sm">
      <img
        src={image}
        alt={name}
        className="card-img-top"
        style={{ height: "250px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text fw-bold">${price}</p>

        <select className="form-select my-2" disabled={!inStock}>
          {variants.map((v, index) => (
            <option key={index}>{v}</option>
          ))}
        </select>

        <button
          className={`btn btn-${inStock ? "dark" : "secondary"} w-100`}
          disabled={!inStock}
        >
          {inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
