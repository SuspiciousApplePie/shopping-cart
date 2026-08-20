import { useOutletContext } from "react-router";
import CartItem from "../cart_item/CartItem";

function Cart() {
  const { cart, setCart } = useOutletContext();

  const cartItems = [...cart.keys()].map((itemId) => {
    return <CartItem key={itemId} item={cart.get(itemId)} />;
  });

  return (
    <main>
      <h2>Cart</h2>
      <section>{cartItems}</section>
    </main>
  );
}

export default Cart;
