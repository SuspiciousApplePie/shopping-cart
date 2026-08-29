import { useOutletContext } from "react-router";
import CartItem from "../cart_item/CartItem";
import styles from "./Cart.module.css";

function Cart() {
  const { cart, removeFromCart, setCart } = useOutletContext();

  const cartItems =
    cart.size === 0 ? (
      <p>No items in cart.</p>
    ) : (
      [...cart.keys()].map((itemId) => {
        return (
          <CartItem
            key={itemId}
            item={cart.get(itemId)}
            removeFromCart={removeFromCart}
            setCart={setCart}
          />
        );
      })
    );

  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      <section className={styles.cartList}>{cartItems}</section>
    </div>
  );
}

export default Cart;
