import React from "react";
import "./main.scss";
import ProductList from "./similarProducts";
import ProductDetailPage from "./productDetailPage";

export default function Main() {
  const products = [
    {
      id: 1,
      title: "Product 1",
      price: "$19.99",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/300x300.png?text=Product+1",
    },
    {
      id: 2,
      title: "Product 2",
      price: "$24.99",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://via.placeholder.com/300x300.png?text=Product+2",
    },
    {
      id: 3,
      title: "Product 3",
      price: "$29.99",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300x300.png?text=Product+3",
    },
  ];

  return (
    <main className="container">
      <ProductDetailPage />
      <ProductList products={products} />
    </main>
  );
}
