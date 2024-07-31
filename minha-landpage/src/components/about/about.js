import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faClock, faLaptopCode, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './about.css'; // Certifique-se de ter um arquivo CSS para estilos

const About = () => {
  const statsData = [
    {
      icon: faUserTie,
      value: '+4',
      label: 'Especialistas'
    },
    {
      icon: faClock,
      value: '+1000Horas',
      label: 'Horas em Desenvolvimento'
    },
    {
      icon: faLaptopCode,
      value: '+200',
      label: 'Projetos Digitais'
    },
    {
      icon: faLightbulb,
      value: '+50',
      label: 'Ideias Tiradas do Papel'
    }
  ];

  return (
    <div className="stats">
      {statsData.map((stat, index) => (
        <div className="stat" key={index}>
          <FontAwesomeIcon icon={stat.icon} size="3x" />
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
