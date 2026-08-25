import { Link } from "react-router";

function Header() {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
