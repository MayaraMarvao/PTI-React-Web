import Cabecalho from '../../components/Header';
import Logar from '../../components/Login';
import Propaganda from '../../components/Propaganda';
import Rodape from '../../components/Rodape';
import './index.scss';
    
export default function Documentacao() {
    return(
        <div className='documentacao'>
            
            <Cabecalho />
            
            <div className='conteudo'>
                <h1>Documentação</h1>

                <h2>Introdução</h2>

                <p>React é uma biblioteca JavaScript para construção de interfaces de usuário. Saiba tudo sobre React em nossa página inicial ou através do tutorial.</p>

                <ul>
                    <il>Pratique React</il>
                    <il>Aprenda React</il>
                    <il>Mantenha-se informado</il>
                    <il>Documentação das versões</il>
                    <il>Esquecemos Algo?</il>
                </ul>

                <h3>Pratique React</h3>
                <p>React foi pensado desde o início para ser adotado gradualmente e você pode usar menos ou mais da biblioteca de acordo com sua necessidade. Se você quer uma amostra do React, adicionar interatividade a uma página HTML simples ou iniciar uma aplicação React complexa, os links desta seção o ajudarão no início.</p>

                <h3>Editores Online</h3>
                <p>
                Se você está interessado em testar um pouco o React, pode usar um editor de código online. Tente um Olá Mundo no CodePen, CodeSandbox, ou Stackblitz. <br/>Se prefere usar o seu próprio editor de texto, pode também baixar este arquivo HTML, editá-lo e a partir do seu sistema de arquivos abrir em seu navegador web. Este arquivo faz uma lenta transformação de código em tempo de execução, portanto nós recomendamos usar somente para demonstrações simples.


                </p>
            </div>
            <div className='prop-log'>
                
                <Propaganda />
                <Logar />
            </div>


            <Rodape />
        </div>
    )
}