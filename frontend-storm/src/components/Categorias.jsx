import React from "react";
import "../assets/css/categorias.css";

const Categorias = (props) => {
  const categoria = props.categoria;

  return (
    <div className="categoria">
      <img className="categoria-img" src="image/sacola-de-compras-quadrada-com-alca.png" alt="" />
      <p>{categoria}</p>
    </div>
  );
};

export default Categorias;
