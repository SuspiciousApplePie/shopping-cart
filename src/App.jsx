import Shop from "./shop/Shop";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Fetch failed.");
        }
        return res.json();
      })
      .then((fetchedData) => {
        setProducts(fetchedData);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Shop products={products} />
    </>
  );
}

export default App;
