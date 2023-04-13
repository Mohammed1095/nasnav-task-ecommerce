import React from "react";
import "./main.scss";
import ProductList from "./similarProducts";
import ProductDetailPage from "./productDetailPage";

export default function Main(props) {
  return (
    <main className="container">
      <ProductDetailPage onAddToCart={props.onAddToCart} />
      <ProductList products={props.products} />
    </main>
  );
}
