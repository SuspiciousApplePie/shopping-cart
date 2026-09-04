import { Link } from "react-router";
import styles from "./Homepage.module.css";
function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.hero}>
        <div className={styles.title}>
          <h1>Welcome to the Shopping Cart</h1>
          <h3>Shop and buy items in shopping cart</h3>
        </div>
        <Link to="/shop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
          >
            <path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
          </svg>
          Shop now
        </Link>
      </div>
      <div className={styles.about}>
        <h2>About Us</h2>
        <section>
          <span>
            About Us Welcome to our online store! We're dedicated to making your
            shopping experience simple, convenient, and enjoyable. Our goal is
            to provide quality products at affordable prices, all in one
            easy-to-use place. <br />
          </span>
          <span>
            From browsing our products to adding items to your shopping cart and
            checking out, we strive to make every step quick and hassle-free. We
            value our customers and are committed to providing great products
            and reliable service. <br />
          </span>
          <span>Thank you for choosing us. Happy shopping!</span>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
