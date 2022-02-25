import React, { useEffect, useState, useContext } from "react";
import styles from "./HeaderBar.module.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { CartContext } from "../store/CartProvider";
import { GetAuth } from "../store/api.js";
import logo from "../assets/logo.png";

export default function HeaderBar() {
  const { FetchCart, cartList } = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  // 抓取 auth token，並接續抓購物車
  useEffect(() => {
    GetAuth().then((res) => {
      // sessionStorage.setItem("auth", res[0]);
      sessionStorage.setItem("auth", res);
      FetchCart();
    });
  }, []);

  // 購物車動畫
  useEffect(() => {
    if (cartList.length === 0) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [cartList]);

  const total = cartList.map((item) => item.amount).reduce((a, b) => a + b, 0);

  return (
    <div className="p-2 bg-main text-white px-5">
      <div className={styles.wrapper}>
        <Link to="/" className="p-1">
          <img src={logo} className="h-9" alt="logo" />
        </Link>

        <Link
          to="/cart"
          className={`${
            btnIsHighlighted && "bump"
          } py-2 px-3 flex items-center rounded hover:bg-main-dark`}
        >
          <ShoppingCartIcon className={`mr-1`} />
          <div className="rounded-lg text-sm bg-indigo-400 w-5 text-white text-center">
            {total}
          </div>
        </Link>
      </div>
    </div>
  );
}
