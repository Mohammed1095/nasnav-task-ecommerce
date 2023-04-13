import React from "react";
import ProductCard from "./components/productCard/ProductCard";
import "./similarProducts.scss";

const ProductList = ({ products }) => {
  return (
    <div className="product-list-container">
      <div className="product-list">
        <div className="product-list-header">Similar Products</div>
        <div className="product-list-subheader">
          You may like these products also
        </div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
