import './style.css';

import React from 'react'

import Cabecalho from '../../Tela/Cabecalho/Cabecalho';

import Fundo from '../../assests/imagens/atras.png'


function Head() {

 return(
    <div className='back' style={{backgroundImage: `url(${Fundo})`}}>
        <Cabecalho />

    </div>
 );
};

export default Head;