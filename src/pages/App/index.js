import Cabecalho from '../../components/Header';
import './index.scss';
import Rodape from '../../components/Rodape';
import Logar from '../../components/Login';
import Propaganda from '../../components/Propaganda';




function App() {
  return (
    <div className="App">
      <Cabecalho />
      <div className='conteudo'>
        <div >
          <h2>React: o que é, como funciona e um guia dessa popular ferramenta JS</h2>
          <p>Se você está começando a aprender sobre desenvolvimento de software, provavelmente já ouviu falar sobre React.</p>
          <p>Mas o que é esse framework e por que é tão popular entre pessoas desenvolvedoras?</p>

          <h3>Por que o React é popular no mundo da programação?</h3>
          <p>Se você é uma pessoa usuária de redes sociais, principalmente do ecossistema do Facebook, já deve ter percebido que determinadas partes da tela têm comportamentos especiais ou independentes do restante da aplicação. Por exemplo, os anúncios que são exibidos.</p>
          <p>Pensando na melhor forma de lidar com esse tipo de funcionalidade, a equipe de desenvolvedores do Facebook desenvolveu uma forma muito específica de lidar com os dados exibidos e a atualização dessas pequenas porções da aplicação: o React.</p>
          <p>Muitas empresas de tecnologia, incluindo o Instagram, a Netflix, o Airbnb e o Twitter, usam o React em suas aplicações web e móveis.</p>
          <p>Isso significa que há uma grande variedade de oportunidades de emprego em diferentes tipos de empresas que usam React.</p>
          <p>Além disso, o React é uma biblioteca de código aberto, o que significa que há uma comunidade ativa e vibrante de desenvolvedores e desenvolvedoras que contribuem com códigos e recursos para ajudar a melhorar a tecnologia.</p>
          <p>Isso pode ser uma ótima maneira de se conectar com outras pessoas desenvolvedoras e aprender sobre as últimas tendências e melhores práticas no mundo do React.</p>
        </div>

        <div>
          <h3>Resumo do porquê React JS</h3>
          <p>Em resumo, o mercado de trabalho para desenvolvedores(as) React é muito bom, com muitas empresas de tecnologia que usam esse framework em suas aplicações.</p>
          <p>Além disso, a comunidade de código aberto do React é bastante ativa e oferece muitas oportunidades de aprendizado e networking.</p>
          <p>Neste artigo, você descobrirá tudo sobre o React, o que é, para que serve e como mergulhar mais fundo nesse universo do Front-End.</p>
          <p>Do Front End ao React – Hipsters Ponto Tech #258</p>
        </div>
        <div>
          <h3>O que é React JS?</h3>
          <p>React é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web.</p>
          <p>Ele é popular por ser fácil de usar, altamente flexível e escalável, e é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb.</p>
        </div>

      <div>
        <h3>O que é um Framework? - Entendendo melhor o React</h3>
        <p>Um framework é um conjunto de ferramentas e bibliotecas que fornecem um conjunto de recursos e funcionalidades prontas para desenvolvedores e desenvolvedoras de software.</p>
        <p>Isso permite construir aplicativos mais rapidamente, com menos esforço e código, e com menores chances de erros.</p>
        <p>Existem diferentes frameworks disponíveis para diferentes linguagens de programação, incluindo:</p>
        <ul>
          <li>JavaScript;</li>
          <li>Python;</li>
          <li>Java e muitas outras.</li>
        </ul>
        <p>Alguns dos frameworks mais populares incluem o React para JavaScript, o Django para Python e o Spring para Java.</p>
      </div>
    </div>


    <div className='prop-log'>
                
                <Propaganda />
                <Logar />
            </div>


      


      
      <Rodape />
      
    </div>
  );
}

export default App;
