import Shop from "./shop/Shop";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong. Please try again.");
        }
        return res.json();
      })
      .then((fetchedData) => {
        setProducts(fetchedData);
      })
      .catch(() => setError(true))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Shop products={products} loading={loading} error={error} />
    </>
  );
}

export default App;
