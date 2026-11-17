import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

export default function App() {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column justify-content-between">
      {/* Navbar com Bootstrap */}
      <Navbar />

      {/* Conteúdo Principal com Container e Grid do Bootstrap */}
      <main className="container my-auto py-4">
        {/* Banner Hero */}
        <section className="bg-light text-dark rounded-4 p-5 text-center mb-5 shadow">
          <h1 className="fw-bold mb-3 display-6 text-dark">Bem-vindo ao Meu Projeto!</h1>
          <p className="text-muted fs-5 mb-4">
            Conheça nossa plataforma e descubra tudo o que podemos oferecer.
          </p>
          <button className="btn btn-primary btn-lg px-4 rounded-pill fw-semibold">
            Saiba mais
          </button>
        </section>

        {/* Seção Serviços em Grid (3 colunas) */}
        <section id="servicos">
          <h2 className="fs-4 mb-4 fw-normal text-light">Nossos serviços</h2>
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-12 col-md-4">
              <div className="card bg-black text-light border border-secondary p-4 text-center h-100 rounded-4">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="fs-1 mb-2 text-primary">⊞</div>
                  <h5 className="card-title fw-bold">Serviço 01</h5>
                  <p className="card-text text-secondary small">Conheça nossas soluções.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-4">
              <div className="card bg-black text-light border border-secondary p-4 text-center h-100 rounded-4">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="fs-1 mb-2 text-primary">⚙️</div>
                  <h5 className="card-title fw-bold">Serviço 02</h5>
                  <p className="card-text text-secondary small">Mais praticidade.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-4">
              <div className="card bg-black text-light border border-secondary p-4 text-center h-100 rounded-4">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="fs-1 mb-2 text-primary">👥</div>
                  <h5 className="card-title fw-bold">Serviço 03</h5>
                  <p className="card-text text-secondary small">Experiência organizada.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé Bootstrap */}
      <footer className="bg-dark text-center py-3 text-secondary border-top border-secondary mt-auto">
        <small>© 2026 MeuProjeto - Todos os direitos reservados.</small>
      </footer>
    </div>
  );
}