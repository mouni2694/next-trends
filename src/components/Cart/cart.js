import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Header/header";

import "./cart.css";

const Cart = () => {
  const accessToken = Cookies.get("jwt_token");

  if (accessToken === undefined) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        <img
          src="/assets/images/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-img"
        />
      </div>
    </>
  );
};

export default Cart;
