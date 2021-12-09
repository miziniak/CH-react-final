import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss";

const Item = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className="link">
      <Link to={`/item/${product.id}`}>
        <div className="counter link__item" style={{ width: "15rem" }}>
          <div className="counter__content counter__content-top">
            <img
              src={image}
              className="card-img-top"
              alt="Imagen de Producto"
            />
            <h5 className="card-title">{name}</h5>
            <h6>{price}€</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
