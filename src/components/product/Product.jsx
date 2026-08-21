function Product({ product, quantity, setQuantity, cart, setCart }) {
  const updateValue = (newValue, id) => {
    setQuantity((prev) => {
      if (newValue >= 1) {
        return { ...prev, [id]: newValue };
      } else if ((prev[id] && newValue < 1) || (prev[id] && newValue === "")) {
        // Removes the object from quantity if new value is less than 0.
        const newObj = Object.fromEntries(
          Object.entries(prev).filter(([key]) => key === id),
        );
        return newObj;
      } else {
        return prev;
      }
    });
  };

  const addToCart = () => {
    if (!cart.has(product.id)) {
      setCart((prev) => {
        const next = new Map(prev);
        next.set(product.id, {
          id: product.id,
          image: product.image,
          title: product.title,
          totalPrice: +product.price * quantity[product.id],
          quantity: quantity.id,
        });
        return next;
      });
    }
  };

  const removeToCart = () => {
    if (cart.has(product.id)) {
      setCart((prev) => {
        const next = new Map(prev);
        next.delete(product.id);
        return next;
      });
    }
  };

  return (
    <div>
      <figure>
        <img src={product.image} alt={`${product.title} image`} />
        <figcaption>
          <h3>{product.title}</h3>
          <span>${product.price}</span>
          <br />
          <span>{product.rating.rate}</span>
          <br />
          <span>{product.rating.count} Reviews</span>
        </figcaption>
      </figure>
      {!cart.has(product.id) ? (
        <form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            addToCart();
          }}
        >
          <div>
            <button
              type="button"
              aria-label="Lower quantity"
              onClick={() => {
                const newValue = (quantity[product.id] || 0) - 1;
                updateValue(newValue, product.id);
              }}
            >
              -
            </button>
            <label htmlFor="quantity">
              <input
                type="number"
                id="quantity"
                name="quantity"
                min={1}
                value={quantity[product.id] || ""}
                onChange={(e) => {
                  updateValue(+e.target.value, product.id);
                }}
                required
              />
            </label>
            <button
              type="button"
              aria-label="Higher quantity"
              onClick={() => {
                const newValue = (quantity[product.id] || 0) + 1;
                updateValue(newValue, product.id);
              }}
            >
              +
            </button>
          </div>
          <button type="submit">Add to Cart</button>
        </form>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            removeToCart();
          }}
        >
          <button type="submit">Remove</button>
        </form>
      )}
    </div>
  );
}

export default Product;
