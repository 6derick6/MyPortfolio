import './style.css';

import React from 'react'
import Logo from "../../assests/imagens/logo js.png"

function Conteudo() {

 return(
    <div className='conteudo'>
        <div className='linguagens'>Dominant Languages:</div>
        <div className='logo-js' style={{backgroundImage: `url(${Logo})`}}></div>
    </div>
 );
};

export default Conteudo;