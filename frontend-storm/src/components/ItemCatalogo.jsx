import React from 'react';
import '../assets/css/itemcatalogo.css'
function ItemCatalogo(props) {
    return (
        <div className='item'>
           <img src={props.imagem} alt="" className='imagem'/>
           <div className='nome'>
                <span>{props.nome}</span><br />
           </div>
           <span className='preco'>R$ {props.preco}</span><br />
           <span className='parcelas'> {props.parcelas}</span><br />
           <span className='frete'>Frete {props.frete}</span><br />
           <button className='botao'>Adicionar ao carrinho</button>
        </div>
        
    );
}
export default ItemCatalogo;