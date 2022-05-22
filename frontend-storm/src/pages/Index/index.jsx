import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import Categorias from "../../components/Categorias";
import ItemCarrinho from "../../components/ItemCarrinho";

function Index() {
  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="cabecalho"></div>

        <div className="principal" style={{ width: "100%" }}>
          <Carousel />
          <Categorias />
          <ItemCarrinho nomeProduto="teste" preco="124,89" numParcelas="12x" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Index;
