import { ProductCardProps } from "./interface";
import "./style.css";

const ProductCard: React.FC<ProductCardProps> = ({ title, url }) => {
  return (
    <div className="product-card-container">
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="product-image"
      />
      <div className="product-details">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProductCard;
