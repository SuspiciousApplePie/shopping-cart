import Product from "../product/Product.jsx";

function Shop({ products, loading, error }) {
  const displayedProducts = products.map((product) => {
    return <Product key={product.id} product={product} />;
  });
  return (
    <main>
      <h2>Products</h2>
      <section>
        {loading ? (
          <p>Loading</p>
        ) : error ? (
          <p>Something went wrong. Please try again.</p>
        ) : products.length > 0 ? (
          displayedProducts
        ) : (
          <p>No products available.</p>
        )}
      </section>
    </main>
  );
}

export default Shop;
