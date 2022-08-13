import { Link } from "react-router-dom";
import { ROUTE } from "../../constants/route";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./style.css";

const HeaderNavigation = () => {
  return (
    <div className="header-nav-container">
      <div className="nav-items-left">
        <Link className="nav-item shop-name" to={ROUTE.HOME}>
          Shop.In
        </Link>
        <Link className="nav-item" to={ROUTE.ALL_PRODUCTS}>
          All Products
        </Link>
      </div>
      <div className="nav-items-right">
        <span className="nav-item shopping-cart">
          <AiOutlineShoppingCart size={30} />
        </span>
      </div>
    </div>
  );
};

export default HeaderNavigation;
