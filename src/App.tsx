// import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ROUTE } from "./constants/route";
import AllProduct from "./containers/AllProductPage";
import CheckoutPage from "./containers/CheckoutPage";
import Home from "./containers/Home";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <>
          {/* <Navigate to={ROUTE.HOME} /> */}
          <Route path={ROUTE.HOME} element={<Home />} />
          <Route path={ROUTE.ALL_PRODUCTS} element={<AllProduct />} />
          <Route path={ROUTE.CHECKOUT} element={<CheckoutPage />} />
        </>
      </Routes>
    </div>
  );
}

export default App;
