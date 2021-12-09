import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/cartContext";

import "./Checkout.scss";

const Checkout = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    if (cart.length > 0) {
      setTotalPrice(
        cart
          .map((product) => product.price * product.quantity)
          .reduce((total, valor) => total + valor)
      );
    }
  }, [cart]);

  return (
    <div className="checkout container">
      <div className="card text-center">
        <div className="card-header">Resúmen</div>
        <div className="card-body">
          <h5 className="card-title">Total: {totalPrice}€</h5>
          <p className="card-text"><img
          style={{
              width: "15px",
              marginRight: "10px"
            }}
            src="https://cdn-icons-png.flaticon.com/512/4442/4442642.png"
            className="happy-img"
            alt="Imagen Fin de compra"
          />Entrega estimada entre el 18.12. y 22.10.</p>
          <Link to="/form" className="btn btn-primary">
            Pagar y finalizar mi pedido
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
