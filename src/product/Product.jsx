function Product({ product, quantity, setQuantity }) {
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

  return (
    <div>
      <figure>
        <img src={product.image} alt={`${product.title} image`} />
        <figcaption>
          <h3>{product.title}</h3>
          <span>${product.price}</span>
          <br />
          <span>{product.rating.rate}</span>
        </figcaption>
      </figure>
      <form action="post">
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
    </div>
  );
}

export default Product;
