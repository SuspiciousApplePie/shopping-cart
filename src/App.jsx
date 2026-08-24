import { useState, useEffect } from "react";
import { Outlet } from "react-router";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quantity, setQuantity] = useState({});
  const [cart, setCart] = useState(new Map());

  const removeFromCart = (id) => {
    if (cart.has(id)) {
      setCart((prev) => {
        const next = new Map(prev);
        next.delete(id);
        return next;
      });
    }
  };

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
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Outlet
        context={{
          products,
          loading,
          error,
          quantity,
          setQuantity,
          cart,
          setCart,
          removeFromCart,
        }}
      />
    </>
  );
}

export default App;
