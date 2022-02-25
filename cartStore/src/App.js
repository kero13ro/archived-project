import "./App.scss";
import React from "react";
import HeaderBar from "./components/HeaderBar";
import HomePage from "./page/HomePage";
import Cart from "./page/Cart";
import BuyDetail from "./page/BuyDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ModalProvider from "./store/ModalProvider.js";
import CartProvider from "./store/CartProvider.js";

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <CartProvider>
          <Router>
            <>
              <HeaderBar />
              <div className="container">
                <Switch>
                  <Route path="/" exact>
                    <HomePage />
                  </Route>
                  <Route path="/cart">
                    <Cart />
                  </Route>
                  <Route path="/buyDetail">
                    <BuyDetail />
                  </Route>
                </Switch>
              </div>
            </>
          </Router>
        </CartProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
