import "./App.scss";
import Header from "../src/components/header/Header";
import Main from "../src/components/main/main";
import Footer from "../src/components/footer/Footer";

function App() {
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
    {
      id: 4,
      title: "Product 4",
      price: "$29.99",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300x300.png?text=Product+3",
    },
    {
      id: 5,
      title: "Product 5",
      price: "$29.99",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300x300.png?text=Product+3",
    },
    {
      id: 6,
      title: "Product 5",
      price: "$29.99",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300x300.png?text=Product+3",
    },
    {
      id: 7,
      title: "Product 5",
      price: "$29.99",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300x300.png?text=Product+3",
    },
    {
      id: 8,
      title: "Product 5",
      price: "$29.99",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300x300.png?text=Product+3",
    },
  ];

  const handleAddToCart = (productId) => {
    // find the product by id
    const product = products.find((p) => p.id === productId);
    // add the product to the cart
    console.log(`Added ${product.title} to the cart.`);
  };
  return (
    <>
      <Header />
      <Main products={products} onAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
}

export default App;
