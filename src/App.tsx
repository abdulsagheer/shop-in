// import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ROUTE } from "./constants/route";
import AllProduct from "./containers/AllProductPage";
import CheckoutPage from "./containers/CheckoutPage";
import Home from "./containers/Home";
import { Provider } from "react-redux";
import { rootReducer } from "./store/rootReducer";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import ProductDetailsAction from "./store/actions/productDetailsAction";
import startRootSaga from "./store/rootSaga";
import { composeWithDevTools } from "@redux-devtools/extension";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware?.run(startRootSaga);

store.dispatch({ type: ProductDetailsAction.FETCH_PRODUCTS_DETAILS });
(window as any).shopin = store;

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
