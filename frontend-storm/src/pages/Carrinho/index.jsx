import React from 'react'
import ItemCarrinho from '../../components/ItemCarrinho';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import "../Carrinho/carrinho.css";

function Carrinho() {
    const itens = [
        {nomeProduto: "Teclado", preco: "50,00", numParcelas: "1x"},
        {nomeProduto: "Mause", preco: "30,00", numParcelas: "1x"},
    ]
    
    const itensCarrinho = itens.map(
        (item) =>
            <ItemCarrinho nomeProduto={item.nomeProduto} preco={item.preco} numParcelas={item.numParcelas} />
    )

    return(
        <div className='Carrinho'>
            <Navbar />
            <div className='topoCarrinho'></div>
            <div className='listaProdutos'>
                <h1>Meu Carrinho</h1>
                {itensCarrinho}
            </div>
            <hr />
            <div className='dadosProduto'>
                <div>
                    <h1>Entrega</h1>
                    <input type="radio" /> Entrega 1 : Gratis <br />
                    <input type="radio" /> Entrega 2 : R$ 10,00
                </div>

                <hr />

                <div>
                    <h1>Pagamento</h1>
                    <input type="radio" /> Boleto<br />
                    <input type="radio" /> Cartão de credito : até 10X sem juros
                </div>

                <button className='finalizarCompra'>Finalizar pagamento</button>

            </div>

            <Footer />
        </div>
    );
}
export default Carrinho;