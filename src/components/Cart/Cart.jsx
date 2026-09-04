import { useOutletContext } from "react-router";
import CartItem from "../CartItem/CartItem.jsx";
import styles from "./Cart.module.css";
import msgStyles from "../../App.module.css";

function Cart() {
  const { cart, removeFromCart, setCart } = useOutletContext();

  const cartItems = [...cart.keys()].map((itemId) => {
    return (
      <CartItem
        key={itemId}
        item={cart.get(itemId)}
        removeFromCart={removeFromCart}
        setCart={setCart}
      />
    );
  });

  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      {cart.size === 0 ? (
        <section className={styles.msgWrapper}>
          <p className={msgStyles.message}>No items in cart.</p>
        </section>
      ) : (
        <section className={styles.cartList}>{cartItems}</section>
      )}
    </div>
  );
}

export default Cart;
