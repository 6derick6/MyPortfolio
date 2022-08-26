import './style.css';

import React from 'react'

import Cabecalho from '../../assets/Cabecalho/Cabecalho';

import Fundo from '../../assets/Cabecalho/imagens/atras.png'


function Head() {

 return(
    <div className='back' style={{backgroundImage: `url(${Fundo})`}}>
        <Cabecalho />

    </div>
 );
};

export default Head;