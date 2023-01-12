import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  About,
  CartPage,
  Checkout,
  Products,
  SingleProduct,
  ErrorPage,
  PrivateRoute,
} from "./pages";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />}>
          <SingleProduct />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
