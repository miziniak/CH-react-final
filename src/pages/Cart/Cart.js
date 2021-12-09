import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import Checkout from "../../components/Checkout/Checkout";
import CartContext from "../../contexts/cartContext";

import "./Cart.scss";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const messageConditional = (
    <div className="card text-center cart-message">
      <div className="card-body">
        <h5 className="card-title">¡Tu carrito está vacío!</h5>
        <p className="card-text">
          Entra en las rebajas de Nike y descubre las zapatillas que más se adapten a tu estilo. Disfruta del diseño a un precio reducido.
        </p>
        <Link to="/" className="btn btn-primary my-3">
          Ver productos Nike
        </Link>
      </div>

    </div>
  );

  return (
    <div className="cart">
      {cart.length === 0 ? (
        messageConditional
      ) : (
        <div>
          <Table />
          <Checkout />
        </div>
      )}
    </div>
  );
};

export default Cart;
