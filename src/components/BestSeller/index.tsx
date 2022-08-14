import ProductCard from "../../components/ProductCard";
import "./style.css";
const BestSeller = () => {
  return (
    <div className="best-seller-container">
      <h2>BestSeller</h2>
      <div className="best-seller-products">
        <ProductCard
          url="http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png"
          title="Formal Dress Shirts Casual Long Sleeve Slim Fit"
        />
        <ProductCard
          url="http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Short%20Sleeve%20Slim%20Fit%20-%20Blue.png"
          title="Formal Dress Shirts Casual Short Sleeve Slim Fit"
        />
        <ProductCard
          url="http://localhost:1234/public/images/Soft%20Summer%20Short%20Slim%20Fit%20-%20Gray.png"
          title="Soft Summer Short Slim Fit"
        />
        <ProductCard
          url="http://localhost:1234/public/images/Icy%20Blue%20Polo%20Dress%20-%20Blue.png"
          title="Icy Blue Polo Dress"
        />
      </div>
    </div>
  );
};

export default BestSeller;
