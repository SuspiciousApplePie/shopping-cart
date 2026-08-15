function Product({ product }) {
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
          <button type="button" aria-label="Lower quantity">
            +
          </button>
          <label htmlFor="quantity">
            <input type="number" id="quantity" name="quantity" />
          </label>
          <button type="button" aria-label="Higher quantity">
            -
          </button>
        </div>
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}

export default Product;
