import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Categorias from "../../components/Categorias";
import Carousel from "../../components/Carousel";

function Index() {
  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="cabecalho"></div>
        <Categorias categoria="categoria 1" />
        <div className="principal">
          <Carousel />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Index;
