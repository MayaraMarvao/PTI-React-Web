import Logar from '../../components/Login';
import Propaganda from '../../components/Propaganda';
import './index.scss';
import Rodape from '../../components/Rodape';
import Cabecalho from '../../components/Header';



export default function Comunidade(){
   
   

    return(
        <div className="Comunidade">
            <Cabecalho />
            <div className='conteudo'>
                <h1>Onde Obter Suporte</h1>
                <p>O React conta com uma comunidade de milhões de desenvolvedores.</p>
                <p>Nesta página, mostraremos algumas comunidades relacionadas ao React que você pode fazer parte; Veja as outras páginas desta seção para obter materiais de aprendizagem adicionais online e presencial.</p>
                <p>Antes de participar das comunidades do React, leia nosso Código de Conduta. Adotamos o Convênio do Colaborador e esperamos que todos os membros da comunidade sigam as diretrizes contidas nele.</p>
                <h3>Estouro de pilha</h3>
                <p>Stack Overflow é um fórum bastante popular para realizar perguntas no nível de código ou tirar dúvidas sobre um erro em específico. Leia as perguntas existentes marcadas como reactjs ou faça sua própria pergunta!</p>
                <h3>Fóruns de Discussões Populares</h3>
                <p>Existem diversos fóruns online que são ótimos lugares para discutir sobre as melhores práticas, arquitetura de aplicativos e claro sobre o futuro do React. Se você tem alguma pergunta a nível de código, o Stack Overflow normalmente é o mais adequado.</p>

                <ul>Cada comunidade consiste em milhares de usuários do React.
                    <li>Comunidade React do DEV</li>
                    <li>Comunidade React de Hashnode</li>
                    <li>Bate-papo on-line Reactiflux</li>
                    <li>Comunidade React do Reddit</li>
                </ul>
            </div>
            <div className='prop-log'>
                
                <Propaganda />
                <Logar />
            </div>
            <Rodape />
        </div>

    )
}