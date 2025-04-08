import React from 'react';
import './Navbar.css'; // Importando o CSS do componente
import logo from '../../assets/logo.png'; // Substitua pelo caminho da sua logo
import { FaWhatsapp } from 'react-icons/fa'; // Ícone do WhatsApp

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo Meu Bairro Online" />
      </div>

      {/* Menu de navegação */}
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#servicos">Serviços</a>
        <a href="#noticias">Notícias</a>
        <a href="#lazer">Lazer</a>
        <a href="#saude">Saúde</a>
      </nav>

      {/* Botão do WhatsApp */}
      <div className="whatsapp-button">
        <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={24} />
        </a>
      </div>
    </header>
  );
};

export default Navbar;