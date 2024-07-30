import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa'; // Adicionando LinkedIn como exemplo
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4pnf28x', 'template_gn8rbo4', form.current, 'ne4DUSQsi5OEfq2ak')
      .then((result) => {
        alert('Mensagem enviada com sucesso!');
        form.current.reset();
      }, (error) => {
        alert('Falha ao enviar a mensagem.');
        console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail} className="form">
          <input placeholder="Nome Completo" type="text" className="input" name='name' required />
          <input placeholder="Email" type="email" className="input" name='email' required />
          <textarea placeholder="Nos envie sua mensagem!" rows="10" cols="30" id="message" name="message" className="textarea" required></textarea>
          <div className="button-container">
            <button type="submit" className="send-button">Enviar Mensagem</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
