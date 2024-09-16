import React, { useRef } from 'react';
import Navbar from './components/navbar/navbar';
import './App.css';
import About from './components/about/about';
import Services from './components/services/services';
import Technology from './components/tecnologies/technology';
import Cases from './components/cases/cases';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="App-header__info">
          <h1>Soluções de Anúncios e Softwares sob medida</h1>
          <p></p>
          <div className="App-header__btn">
            <button onClick={handleScrollToContact} className="custom-button">Saiba mais</button>
          </div>
        </div>
      </header>
      <main>
      <div className="article-header"></div>
        {/* A tag do anúncio  
        <div className='r7ad-sunmedia'>
            <cda-ad-player ad-hash="/7542/parceiros/amomeupet/video"></cda-ad-player>
        </div>*/}
        <section id="home" className="about-us">
          <p className="subtitle_p">
            "Na Proactive Solutions, transformamos ideias inovadoras em soluções digitais que geram resultados tangíveis. Com um foco em anúncios, criação de sites, e análise de dados, ajudamos empresas a maximizar seu potencial digital e alcançar novos patamares de sucesso."
          </p>
          <h2 className='subtitle_h2'>Sobre a Nossa Jornada</h2>
          <About />
        </section>
        <section id="services" className="services">
          <p className="subtitle_p">"Na Proactive Solutions, oferecemos soluções completas para otimizar a gestão de anúncios e análises de dados. Especializados em scripts avançados para GAM e GTM, criação de sites e landpages sob medida, e extração de relatórios detalhados, garantimos que sua presença digital seja eficiente e impactante."</p>
          <h2 className='subtitle_h2' style={{ color: 'white' }}>Nossos principais serviços</h2>
          <Services />
        </section>
        <section id="technology" className="technology">
          <p className="subtitle_p">"Nossa equipe emprega as ferramentas mais modernas e escaláveis para criar soluções digitais inovadoras, incluindo desenvolvimento de sites, integração com GAM e GTM, e análise avançada com relatórios de GAM e Analytics, atendendo às suas necessidades específicas e maximizando os resultados."</p>
          <h2 className='subtitle_h2'>Tecnologias que Utilizamos</h2>
          <Technology />
        </section>
        <section id="cases" className="cases">
          <p className="subtitle_p">"Confira alguns dos nossos projetos de destaque e como ajudamos nossos clientes a alcançar resultados extraordinários."</p>
          <h2 className='subtitle_h2' style={{ color: 'white' }}>Casos de Implementações que foram Validados com Sucesso</h2>
          <Cases />
        </section>
        <section id="contact" className="contact" ref={contactRef}>
          <p className="subtitle_p">"Entre em contato conosco por e-mail ou WhatsApp. Estamos prontos para atender suas necessidades e responder suas perguntas."</p>
          <h2 className='subtitle_h2'>Formas de entrar em contato conosco.</h2>
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
