import { Link } from "react-router";
import { useOutletContext } from "react-router";
function Homepage() {
  const { products } = useOutletContext();
  const carousel = products.map((product) => {
    return (
      <img key={product.id} src={product.image} alt={`${product.title} name`} />
    );
  });
  return (
    <main>
      <div>
        <h1>Welcome to the Shopping Cart</h1>
        <h3>Shop and buy items in shopping cart</h3>
        <button type="button">
          <Link to="/shop">Shop now</Link>
        </button>
      </div>
      <div>{carousel}</div>
    </main>
  );
}

export default Homepage;
