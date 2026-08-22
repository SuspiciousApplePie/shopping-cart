const constant = {
  ADD: "add",
  SUBTRACT: "subtract",
};

function CartItem({ item, removeFromCart, setCart }) {
  const increaseQuantity = (type) => {
    if (item.quantity === 1 && type === constant.SUBTRACT) return;
    setCart((prev) => {
      const next = new Map(prev);
      const cartItem = next.get(item.id);
      if (type === constant.ADD) {
        next.set(item.id, { ...cartItem, quantity: cartItem.quantity + 1 });
      } else {
        next.set(item.id, { ...cartItem, quantity: cartItem.quantity - 1 });
      }
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
        <span>Total: ${item.price * item.quantity}</span>
      </div>
      <div>
        <button
          onClick={() => increaseQuantity(constant.SUBTRACT)}
          type="button"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => increaseQuantity(constant.ADD)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </figure>
  );
}

export default CartItem;
