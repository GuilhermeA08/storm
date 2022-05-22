import React from 'react';
import '../assets/css/itemcatalogo.css'
import sacola from '../assets/images/sacola.png.png'

function ItemCatalogo(props) {
    return (
        <div className='item'>
            <div>
            <img src={props.imagem? props.imagem : sacola} alt="" className='imagem'/>
            </div>
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