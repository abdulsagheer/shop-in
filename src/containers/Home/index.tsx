import { Partners } from "../../components/Partners";
import ShopQuality from "../../components/ShopQuality";
import BestSeller from "../../components/BestSeller";
import "./style.css";

const Home = () => {
  return (
    <div className="homepage-container">
      <div className="cover-image" />
      <ShopQuality />
      <BestSeller />
      <Partners />
    </div>
  );
};

export default Home;
