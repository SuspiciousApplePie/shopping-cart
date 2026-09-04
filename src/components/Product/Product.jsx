import styles from "./Product.module.css";

function Product({
  product,
  quantity,
  setQuantity,
  cart,
  setCart,
  removeFromCart,
}) {
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
          price: product.price,
          quantity: quantity[product.id],
        });
        return next;
      });

      setQuantity((prev) => {
        const next = { ...prev };
        delete next[product.id];
        return next;
      });
    }
  };

  return (
    <div className={styles.product}>
      <figure className={styles.info}>
        <img
          src={product.image}
          alt={`${product.title} image`}
          height={300}
          width={250}
        />
        <figcaption>
          <h3>{product.title}</h3>
          <span className={styles.price}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z" />
            </svg>
            {product.price}
            <br />
          </span>

          <span className={styles.rating}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="m384-334 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-120l93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Zm247-369Z" />
            </svg>
            {product.rating.rate}
            <br />
          </span>

          <span className={styles.reviews}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M240-400h122l200-200q9-9 13.5-20.5T580-643q0-11-5-21.5T562-684l-36-38q-9-9-20-13.5t-23-4.5q-11 0-22.5 4.5T440-722L240-522v122Zm280-243-37-37 37 37ZM300-460v-38l101-101 20 18 18 20-101 101h-38Zm121-121 18 20-38-38 20 18Zm26 181h273v-80H527l-80 80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
            </svg>
            {product.rating.count} Reviews
          </span>
        </figcaption>
      </figure>
      {!cart.has(product.id) ? (
        <form
          className={styles.cartForm}
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            addToCart();
          }}
        >
          <div className={styles.cartInput}>
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
          <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
            Add to Cart
          </button>
        </form>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            removeFromCart(product.id);
          }}
        >
          <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M360-640v-80h240v80H360ZM223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
            </svg>
            Remove
          </button>
        </form>
      )}
    </div>
  );
}

export default Product;
