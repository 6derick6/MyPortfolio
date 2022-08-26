import './style.css';

import React from 'react'

import Eu from "../../assests/imagens/eu1.jpg"


function Cabecalho() {

 return(
    <div className='cabecalho'>
        <div className='foto' style={{backgroundImage: `url(${Eu})`}}></div>
        <div className='nome'>Dérick Augusto Trennepohl</div>
        <div className='nome_aplicacao'>Portfólio</div>
    </div>
 );
};

export default Cabecalho;