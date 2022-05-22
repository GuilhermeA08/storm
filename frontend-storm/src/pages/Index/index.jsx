import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import Categoria from '../../components/Categoria';
import Categorias from '../../components/Categorias';

function Index() {
    return (
        <div>
            <Navbar />
            <div className='body'>
                <div className='cabecalho'>

                </div>
                
                <div className='principal' style={{width:'100%'}}>
                    <Carousel />
                    <Categorias/>
                </div>

            </div>
            <Footer />
        </div>
  );
}
export default Index;
