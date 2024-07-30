import React, { useState } from 'react';
import { Business, Settings, Email, Code, Dashboard, Storage, Analytics } from '@mui/icons-material';
import './cases.css';

const casesData = [
  {
    id: 1,
    title: 'Implementação e Configuração de Header Bidding',
    icon: <Business style={{ color: 'black' }} />,
    description: '"Implementação e configuração de header bidding para otimização de CPMs e preenchimento de inventário de anúncios."',
  },
  {
    id: 2,
    title: 'Preparação de Anúncios com GPT e GTM',
    icon: <Settings style={{ color: 'black' }} />,
    description: 'Preparação e validação de anúncios usando GPT e implementação de códigos via GTM para eficiência das campanhas.',
  },
  {
    id: 3,
    title: 'Criação de Templates de E-mail E-marketing',
    icon: <Email style={{ color: 'black' }} />,
    description: 'Desenvolvimento de templates personalizados para e-mail marketing, aumentando a taxa de abertura e engajamento.',
  },
  {
    id: 4,
    title: 'Problemas de Anúncios',
    icon: <Settings style={{ color: 'black' }} />,
    description: 'Soluções para problemas de implementação de anúncios, garantindo exibição perfeita e sem erros.',
  },
  {
    id: 5,
    title: 'Otimização de Performance Web',
    icon: <Code style={{ color: 'black' }} />,
    description: 'Otimização de códigos para melhorar o desempenho das páginas web, reduzindo o tempo de carregamento e aumentando a visibilidade dos anúncios.',
  },
  {
    id: 6,
    title: 'Lazy Loading e Auto Refresh',
    icon: <Code style={{ color: 'black' }} />,
    description: 'Implementação de técnicas avançadas de lazy loading e auto-refresh para exibição eficiente de anúncios.',
  },
  {
    id: 7,
    title: 'Relatórios e Dashboarding',
    icon: <Dashboard style={{ color: 'black' }} />,
    description: 'Criação de relatórios detalhados e dashboards interativos para monitoramento e análise de dados em tempo real.',
  },
  {
    id: 8,
    title: 'Analytics',
    icon: <Analytics style={{ color: 'black' }} />,
    description: 'Desenvolvimento de eventos de monitoramento de dados em tempo real, desenvolvimento de relatórios e análise de dados.',
  }
];

const Cases = () => {
  const [activeCase, setActiveCase] = useState(null);

  const toggleCase = (id) => {
    setActiveCase(activeCase === id ? null : id);
  };

  return (
    <section className="cases">
      <div className="cases-container">
        {casesData.map(caseItem => (
          <div key={caseItem.id} className={`case-card ${activeCase === caseItem.id ? 'active' : ''}`}>
            <div className="case-title">
              <h3>{caseItem.title}</h3>
              {caseItem.icon}
            </div>
            <div className="case-description">
              <p>{caseItem.description}</p>
            </div>
            <button className="case-toggle" onClick={() => toggleCase(caseItem.id)}>
              <i className="fas fa-chevron-down"></i>
              <i className="fas fa-times"></i>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cases;
