import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faTags, faLaptopCode, faEnvelope, faChartLine } from '@fortawesome/free-solid-svg-icons'; // Exemplos de ícones

import './services.css'; // Certifique-se de importar o arquivo CSS para estilos

const ServiceCard = ({ icon, title, description, bottomText, logoBottomText }) => (
  <div className="card">
    <div className="border"></div>
    <div className="content">
      <div className="logo">
        <FontAwesomeIcon icon={icon} size="3x" style={{ color: '#bd9f67' }} />
      </div>
      <div className="logo-bottom-text">{logoBottomText}</div>
      <div className="details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    <div className="bottom-text">{bottomText}</div>
  </div>
);

const Services = () => {
  const servicesData = [
    {
      icon: faTags, // Substitua por um ícone apropriado
      title: 'Publicação de Anúncios',
      description: 'Fornecemos scripts que fazem acesso à Google Ad Manager (GAM) e gerenciamos campanhas publicitárias para otimizar o desempenho.',
      bottomText: 'Proactive Solutions',
      logoBottomText: 'Google AdManager'
    },
    {
      icon: faUserTie,
      title: 'Google Tag Manager (GTM)',
      description: 'Integramos e gerenciamos tags e scripts através do Google Tag Manager, facilitando a configuração e o acompanhamento das suas campanhas.',
      bottomText: 'Proactive Solutions',
      logoBottomText: 'Google Tag Manager'
    },
    {
      icon: faLaptopCode,
      title: 'Criação de Sites e Landpages',
      description: 'Desenvolvemos sites e landpages personalizados para atender às suas necessidades específicas e maximizar a conversão.',
      bottomText: 'Proactive Solutions',
      logoBottomText: 'Web Development'
    },
    {
      icon: faEnvelope,
      title: 'Criações de E-mails E-marketing',
      description: 'Desenvolvemos campanhas de e-mail marketing personalizadas que engajam e convertem, utilizando as melhores práticas do mercado para maximizar seus resultados.',
      bottomText: 'Proactive Solutions',
      logoBottomText: 'Email Marketing'
    },
    {
      icon: faChartLine,
      title: 'Relatórios GAM e Analytics',
      description: 'Extraímos e analisamos relatórios detalhados da GAM e Google Analytics para fornecer insights valiosos sobre o desempenho das suas campanhas.',
      bottomText: 'Proactive Solutions',
      logoBottomText: 'Analytics'
    }
  ];

  return (
    <div className="card-container">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          bottomText={service.bottomText}
          logoBottomText={service.logoBottomText}
        />
      ))}
    </div>
  );
};

export default Services;
