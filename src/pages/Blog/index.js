import Logar from '../../components/Login';
import Propaganda from '../../components/Propaganda';
import Cabecalho from '../../components/Header';
import Rodape from '../../components/Rodape';
import './index.scss';



export default function Blog(){
  
    return(
        <div className="blog">
           <Cabecalho />
           <div className='conteudo'>
                <h1>React Labs: no que estamos trabalhando – junho de 2022</h1>

                <p>O React 18 levou anos para ser criado e com ele trouxe lições valiosas para a equipe do React. Seu lançamento foi resultado de muitos anos de pesquisa e exploração de diversos caminhos. Alguns desses caminhos foram bem-sucedidos; muitos outros eram becos sem saída que levaram a novos insights. Uma lição que aprendemos é que é frustrante para a comunidade esperar por novos recursos sem ter uma ideia dos caminhos que estamos explorando.</p>
                <p>Normalmente temos vários projetos em andamento a qualquer momento, desde os mais experimentais até os claramente definidos. Olhando para o futuro, gostaríamos de começar a compartilhar regularmente mais sobre o que temos trabalhado com a comunidade nesses projetos.</p>
                <p>Para definir expectativas, este não é um roteiro com prazos claros. Muitos desses projetos estão sob pesquisa ativa e é difícil definir datas concretas de envio. Eles podem nunca ser lançados em sua iteração atual, dependendo do que aprendermos. Em vez disso, queremos compartilhar com vocês os espaços problemáticos nos quais estamos pensando ativamente e o que aprendemos até agora.</p>
                
                <h2>Componentes do servidor</h2>                
                <p>Anunciamos uma demonstração experimental do React Server Components (RSC) em dezembro de 2020. Desde então, estamos finalizando suas dependências no React 18 e trabalhando em mudanças inspiradas no feedback experimental.</p>
                <p>Em particular, estamos abandonando a ideia de ter bibliotecas de E/S bifurcadas (por exemplo, react-fetch) e, em vez disso, adotando um modelo assíncrono/aguardado para melhor compatibilidade. Isso não bloqueia tecnicamente a liberação do RSC porque você também pode usar roteadores para busca de dados. Outra mudança é que também estamos nos afastando da abordagem de extensão de arquivo em favor da anotação de limites .</p>
                <p>Estamos trabalhando em conjunto com Vercel e Shopify para unificar o suporte do bundler para semântica compartilhada no Webpack e no Vite. Antes do lançamento, queremos ter certeza de que a semântica dos RSCs é a mesma em todo o ecossistema React. Este é o principal bloqueador para alcançar a estabilidade</p>
                
                
                <h2>Carregamento de ativos</h2>
                <p>Atualmente, ativos como scripts, estilos externos, fontes e imagens normalmente são pré-carregados e carregados usando sistemas externos. Isso pode dificultar a coordenação em novos ambientes, como streaming, componentes de servidor e muito mais. Estamos pensando em adicionar APIs para pré-carregar e carregar ativos externos desduplicados por meio de APIs React que funcionam em todos os ambientes React.</p>
                <p>Também estamos pensando em ter suporte para Suspense para que você possa ter imagens, CSS e fontes que bloqueiem a exibição até que sejam carregadas, mas não bloqueiem o streaming e a renderização simultânea. Isso pode ajudar a evitar “pipocas” à medida que o visual se destaca e o layout muda.</p>
            
                <h2>Otimizações de renderização de servidor estático</h2>
                <p>A geração estática de sites (SSG) e a regeneração estática incremental (ISR) são ótimas maneiras de obter desempenho para páginas armazenáveis ​​em cache, mas achamos que podemos adicionar recursos para melhorar o desempenho da renderização dinâmica do lado do servidor (SSR) - especialmente quando a maioria, mas não todos os o conteúdo pode ser armazenado em cache. Estamos explorando maneiras de otimizar a renderização do servidor utilizando compilação e passagens estáticas.</p>
                
                <h3>Compilador de otimização de reação</h3>   
                <p>Temos uma prévia do React Forget no React Conf 2021. É um compilador que gera automaticamente o equivalente useMemoe useCallbackchamadas para minimizar o custo de nova renderização, enquanto mantém o modelo de programação do React.</p>
                <p>Recentemente, finalizamos uma reescrita do compilador para torná-lo mais confiável e capaz. Essa nova arquitetura nos permite analisar e memorizar padrões mais complexos, como o uso de mutações locais , e abre muitas novas oportunidades de otimização em tempo de compilação, além de apenas estar no mesmo nível dos ganchos de memoização.</p>
                <p>Também estamos trabalhando em um playground para explorar muitos aspectos do compilador. Embora o objetivo do playground seja facilitar o desenvolvimento do compilador, achamos que será mais fácil testá-lo e criar intuição sobre o que o compilador faz. Ele revela vários insights sobre como funciona nos bastidores e renderiza ao vivo as saídas do compilador conforme você digita. Ele será enviado junto com o compilador quando for lançado.</p>
            </div>
            <div className='prop-log'>
                
                <Propaganda />
                <Logar />
            </div>

           
            <Rodape />


        </div>

    )
}