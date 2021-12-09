import React from "react";
import ItemList from "../../components/ItemList/ItemList";

import "./Home.scss";

const Home = ({ greeting, onAdd }) => {
  return (
    <main className="home">
      <div className="home__title">
        <div className="col-lg-8 mx-auto main-container">
          <h1>just do it.</h1>
          <p className="fs-5 mb-4">Entra en las rebajas de Nike y descubre las zapatillas que más se adapten a tu estilo. Disfruta del diseño a un precio reducido.</p>
        </div>
      </div>
      <ItemList onAdd={onAdd} />
    </main>
  );
};

export default Home;
