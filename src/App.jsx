import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import styles from "./App.module.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quantity, setQuantity] = useState({});
  const [cart, setCart] = useState(new Map());
  const [sidebarToggle, setSidebarToggle] = useState(() => {
    return window.innerWidth > 768 ? true : false;
  });

  const toggleSidebar = () => {
    if (sidebarToggle) setSidebarToggle(false);
    else setSidebarToggle(true);
  };

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

  useEffect(() => {
    const desktopSize = window.matchMedia("(min-width: 769px)");
    const watchScreenSIze = (e) => {
      setSidebarToggle(e.macthes);
    };

    desktopSize.addEventListener("change", watchScreenSIze);
    return () => {
      window.removeEventListener("change", watchScreenSIze);
    };
  }, []);
  return (
    <>
      <Header />
      <main
        className={
          sidebarToggle ? styles.main : `${styles.main} ${styles.hide}`
        }
      >
        <Sidebar sidebarToggle={sidebarToggle} toggleSidebar={toggleSidebar} />
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
      </main>
    </>
  );
}

export default App;
