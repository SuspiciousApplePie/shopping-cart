import Product from "../product/Product.jsx";

function Shop({ products }) {
  const displayedProducts = products.map((product) => {
    return <Product key={product.id} product={product} />;
  });
  return (
    <main>
      <h2>Products</h2>
      <section>{displayedProducts}</section>
    </main>
  );
}

export default Shop;
