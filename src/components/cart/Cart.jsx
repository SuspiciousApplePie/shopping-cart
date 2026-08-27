import { useOutletContext } from "react-router";
import CartItem from "../cart_item/CartItem";

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
    <div>
      <h2>Cart</h2>
      <section>{cartItems}</section>
    </div>
  );
}

export default Cart;
