import Cabecalho from '../../components/Header';
import Rodape from '../../components/Rodape';
import'./index.scss';

import React from 'react';

export default function SobreMim (){
    return(
        <div class="sobremim">
            <Cabecalho />
            <h1>Sobre Mim</h1>
            
            <div className='sobre'> 
                <img className='foto' src="/assets/images/20240328_152948.jpg" alt="Minha Foto" />
                <div className='paragrafos'>
                    <p>Olá! Meu nome é <strong>Mayara Leal </strong>e eu sou Designer, Professora e futura Desenvolvedora Web. Nesta página, gostaria de compartilhar um pouco sobre mim.</p>
                    <p>Sou apaixonado por tecnologia, design e educação, meu currículo gira em torno dessas 3 áreas, um sempre complementando a outra. Durante esse tempo, adquiri experiência em Design Gráfico, Educação ensinando Desenho técnico e informática básica e já fiz um estágio em front-end.</p>
                    <p>Fora do trabalho, gosto de praia, filmes, séries, música e desenhar/pintar. .</p>
                    <p>Se quiser entrar em contato comigo, fique à vontade para me enviar um e-mail em mayaraleal95@gmail.com .</p>
                
                </div>
                    
            </div>
            <Rodape/>
        </div>
    )
}