import './style.css';

import React from 'react'
import Logo_html from "../../assests/imagens/logo html.png"
import Logo_css from "../../assests/imagens/logo css.png"
import Logo_js from "../../assests/imagens/logo js.png"
import Logo_react from "../../assests/imagens/logo_react.png"
import Logo_php from "../../assests/imagens/logo php.png"
import Logo_mysql from "../../assests/imagens/logo mysql.png"
import Logo_sc from "../../assests/imagens/logo sc.png"
import Logo_corel from "../../assests/imagens/logo corel.png"

function Conteudo() {

 return(
    <div className='conteudo'>
        <div className='linguagens'>Dominant Languages:</div>
        <div className='imagens-linguagens'>
            <div className='logo-js' style={{backgroundImage: `url(${Logo_html})`}}></div>
            <div className='logo-js' style={{backgroundImage: `url(${Logo_css})`}}></div>
            <div className='logo-js' style={{backgroundImage: `url(${Logo_js})`}}></div>
            <div className='logo-react' style={{backgroundImage: `url(${Logo_react})`}}></div>
            <div className='logo-php' style={{backgroundImage: `url(${Logo_php})`}}></div>
            <div className='logo-js' style={{backgroundImage: `url(${Logo_mysql})`}}></div>
            <div className='logo-js' style={{backgroundImage: `url(${Logo_sc})`}}></div>
            <div className='logo-js' style={{backgroundImage: `url(${Logo_corel})`}}></div>
        </div>
    </div>
 );
};

export default Conteudo;