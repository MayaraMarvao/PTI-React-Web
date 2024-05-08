import Cabecalho from '../../components/Header';
import Logar from '../../components/Login';
import Propaganda from '../../components/Propaganda';
import Rodape from '../../components/Rodape';
import './index.scss';

export default function Tutorial() {
    return(
        <div className='tutorial'>
            <Cabecalho />
            <div className='conteudo'>
                <h1>Tutorial:</h1>
                <h2>Introdução ao React</h2>

                <h3>Antes de começarmos o tutorial</h3>

                <p>Vamos construir um pequeno jogo durante este tutorial. Você pode ficar tentado a ignorá-lo porque você não vai construir jogos - mas dê uma chance. As técnicas que você aprenderá no tutorial são fundamentais para criar qualquer aplicativo React e o domínio delas lhe dará um profundo entendimento de React.</p>

                <h3>O que estamos construindo?</h3>

                <p>Neste tutorial, mostraremos como criar um jogo interativo de jogo-da-velha com React.</p>
                <p>Você pode ver o que vamos construir aqui: Resultado Final. Se o código não fizer sentido para você ou se você não estiver familiarizado com a sintaxe do código, não se preocupe! O objetivo deste tutorial é ajudar você a entender o React e sua sintaxe.</p>
                <p>Recomendamos que você confira o jogo tic-tac-toe (jogo da velha) antes de continuar com o tutorial. Uma das características que você notará é que existe uma lista numerada à direita do tabuleiro do jogo. Esta lista fornece um histórico de todas as jogadas que ocorreram no jogo e é atualizada à medida que o jogo avança</p>
                <p>Você pode fechar o jogo da velha assim que estiver familiarizado com ele. Começaremos a partir de um modelo mais simples neste tutorial. Nosso próximo passo é prepará-lo para que você possa começar a desenvolver o jogo.</p>
                

                <h3>Pré-requisitos</h3>
                <p>Vamos presumir que você já tenha alguma familiaridade com HTML e JavaScript. Porém, você deve ser capaz de acompanhá-lo mesmo que esteja vindo de uma linguagem de programação diferente. Também vamos presumir que você também já esteja familiarizado com conceitos de programação. Tais como: funções, objetos, matrizes em menor escala e classes.</p>
                <p>Se você precisa revisar JavaScript, recomendamos ler este guia. Observe que também estamos usando alguns recursos do ES6 - uma versão recente do JavaScript. Neste tutorial, estamos usando arrow function, classes, let, e declarações const. Você pode usar o Babel REPL para verificar o código ES6 compilado.</p>

                <h3>Configuração para o tutorial</h3>
                <p>Há duas maneiras de concluir este tutorial: você pode escrever o código em seu navegador ou configurar um ambiente de desenvolvimento local em seu computador.</p>

                <h3>Opção de Configuração 1: Desenvolvendo o Código no Navegador</h3>
                <p>Esta é a maneira mais rápida de começar!</p>
                <p>Primeiro, abra este Código Inicial em uma nova guia. A nova aba deve exibir um tabuleiro de tic-tac-toe (jogo da velha) vazio e o código React. Nós estaremos editando o código React neste tutorial.</p>
                <p>Agora você pode ignorar a segunda opção de configuração e ir para a seção Visão geral para obter uma visão geral do React.</p>
                
                <h3>Opção de instalação 2: ambiente de desenvolvimento local</h3>
                <p>Isto é completamente opcional e não é necessário para este tutorial!</p>
                <p>Opção de instalação 2: ambiente de desenvolvimento local</p>

                <h3>Me Ajudem. Estou com Dificuldades!</h3>
                <p>Se você não conseguir proseguir no tutorial por algum motivo, confira os recursos de suporte da comunidade. Em particular, o Reactiflux Chat é uma ótima maneira de obter ajuda rapidamente. Se você não receber uma resposta ou se permanecer preso, registre um problema e nós ajudaremos você.</p>
            </div>
            <div className='prop-log'>
                
                <Propaganda />
                <Logar />
            </div>


            <Rodape />
        </div>
    )
}