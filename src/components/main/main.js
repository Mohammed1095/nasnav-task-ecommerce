import React from "react";
import "./main.scss";
import ProductList from "./similarProducts";
import ProductDetailPage from "./productDetailPage";

export default function Main(props) {
  return (
    <main className="container">
      <ProductDetailPage />
      <ProductList products={props.products} />
    </main>
  );
}
