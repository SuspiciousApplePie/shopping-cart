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
    <figure>
      <div>
        <h3>{item.title}</h3>
        <img src={item.image} alt={`${item.title} image`} />
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            removeFromCart(item.id);
          }}
        >
          <button type="submit" aria-label="Remove">
            X
          </button>
        </form>
      </div>
      <div>
        <span>{`Quantity: ${item.quantity}`}</span>
        <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
      </div>
      <div>
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
