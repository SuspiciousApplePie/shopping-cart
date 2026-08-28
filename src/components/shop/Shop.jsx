import Product from "../product/Product.jsx";
import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";

function Shop() {
  const {
    products,
    loading,
    error,
    quantity,
    setQuantity,
    cart,
    setCart,
    removeFromCart,
  } = useOutletContext();

  const displayedProducts = products.map((product) => {
    return (
      <Product
        key={product.id}
        product={product}
        quantity={quantity}
        setQuantity={setQuantity}
        cart={cart}
        setCart={setCart}
        removeFromCart={removeFromCart}
      />
    );
  });

  return (
    <div className={styles.shop}>
      <h2>Products</h2>
      <section className={styles.productList}>
        {loading ? (
          <p>Loading</p>
        ) : error ? (
          <p>Something went wrong. Please try again.</p>
        ) : products.length > 0 ? (
          displayedProducts
        ) : (
          <p>No products available.</p>
        )}
      </section>
    </div>
  );
}

export default Shop;
