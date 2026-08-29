import styles from "./CartItem.module.css";

function CartItem({ item, removeFromCart, setCart }) {
  const increaseQuantity = () => {
    setCart((prev) => {
      const next = new Map(prev);
      const cartItem = next.get(item.id);
      next.set(item.id, { ...cartItem, quantity: cartItem.quantity + 1 });
      return next;
    });
  };

  const decreaseQuantity = () => {
    if (item.quantity <= 1) return;
    setCart((prev) => {
      const next = new Map(prev);
      const cartItem = next.get(item.id);
      next.set(item.id, { ...cartItem, quantity: cartItem.quantity - 1 });
      return next;
    });
  };

  return (
    <figure className={styles.cartItem}>
      <div className={styles.imgWrapper}>
        <img
          src={item.image}
          alt={`${item.title} image`}
          height={300}
          width={250}
        />
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            removeFromCart(item.id);
          }}
        >
          <button type="submit" aria-label="Remove">
            <svg
              className={styles.removeBtn}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
        </form>
      </div>
      <figcaption className={styles.cartItemInfo}>
        <h3>{item.title}</h3>
        <span>{`Quantity: ${item.quantity}`}</span>
        <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
      </figcaption>
      <div className={styles.cartButtons}>
        <button
          onClick={decreaseQuantity}
          type="button"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <button
          type="button"
          onClick={increaseQuantity}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </figure>
  );
}

export default CartItem;
