import './index.scss';

import React from 'react';
import { Link } from 'react-router-dom';


export default function Rodape (){
    return(
        <footer>
            <div class="footer-container">
                <div class="footer-section">
                    <h3>Links Úteis</h3>
                    <ul>
                        <li><a href="/">Página Inicial</a></li>
                        <li><Link to='/sobremim'>Veja mais sobre mim</Link></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Redes Sociais</h3>
                    <ul>
                        <li><a href="https://www.facebook.com/">Facebook</a></li>
                        <li><a href="https://twitter.com/?lang=pt-br">Twitter</a></li>
                        <li><a href="https://www.instagram.com/">Instagram</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contato</h3>
                    <p>Endereço: Rua Mayara Leal, 123</p>
                    <p>Email: mayaraL@example.com</p>
                    <p>Telefone: (00) 1234-5678</p>
                </div>
               
            </div>
            
        </footer>
    )
}