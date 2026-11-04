import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 border-bottom border-secondary">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4 text-white" href="#">MeuProjeto</a>
        <div className="ms-auto d-flex align-items-center gap-3">
          <a href="#inicio" className="nav-link text-light">Início</a>
          <a href="#sobre" className="nav-link text-light">Sobre</a>
          <a href="#servicos" className="nav-link text-light">Serviços</a>
          <button className="btn btn-primary px-4 rounded-pill font-weight-bold">Entrar</button>
        </div>
      </div>
    </nav>
  );
}