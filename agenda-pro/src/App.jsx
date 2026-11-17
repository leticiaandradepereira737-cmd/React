// Puxa o css global do App pra dar visual e layout na página toda
import "./App.css";

import Header from "./components/Header";
import Resumo from "./components/Resumo";
import Atendimento from "./components/Atendimento";
import Servicos from "./components/Servicos";
import Profissional from "./components/Profissional";
import Footer from "./components/Footer";

function App() {

  //Cria as base das informações do cliente, serve como um modelo básico do agendamento
  const atendimentoBase = {
    cliente: "João Silva",
    servico: "Consulta inicial",
    data: "25/09/2026",
    horario: "14:30",
    modalidade: "Online",
    valor: 120,
    pago: true
  };


  // Usa o ... pra copiar tudo de 'atendimentoBase' e evita ter que escrever os dados do joão zero
  const atendimentoCompleto = {
    ...atendimentoBase,
    observacao: "O link será enviado alguns minutos antes do horário."
  };

  // Junta os números do dia para Marina sabver a rotina e o faturamento
  const resumo = {
    nome: "Marina",
    atendimentosHoje: 4,
    valorRecebido: 480,
    horariosDisponiveis: 3
  };

  // Lista os serviços padrão, usar o array de objetos facilita depois pra fazer um loop e mostrar na tela
  const servicosBase = [
    {
      nome: "Consulta inicial",
      descricao: "Primeiro atendimento para conhecer suas necessidades.",
      valor: 120
    },
    {
      nome: "Retorno",
      descricao: "Acompanhamento do seu processo.",
      valor: 80
    },
    {
      nome: "Avaliação",
      descricao: "Avaliação completa e personalizada.",
      valor: 150
    }
  ];

  // Pega a lista original de serviços e joga um serviço extra no final usando o spread. É um forma limpa do react de incluir itens em uma lista sem alterar a lista original
  const servicos = [
    ...servicosBase,
    {
      nome: "Orientação",
      descricao: "Orientação e suporte para suas dúvidas.",
      valor: 100
    }
  ];

  // Dados básicos do perfil do profissional
  const profissionalBase = {
    nome: "Marina Santos",
    profissao: "Psicóloga",
    cidade: "Brasília - DF"
  };

  // Pega os dados da Marina e adiciona se ela atende online ou presencial
  const profissionalCompleto = {
    ...profissionalBase,
    atendeOnline: true,
    atendePresencial: true
  };

  return (
    <>
      <Header titulo="AgendaPro" />

      <main>
        <Resumo resumo={resumo} />

        <div className="painel-principal">
          <Atendimento atendimento={atendimentoCompleto} />

          <Profissional
            profissional={profissionalCompleto}
          />
        </div>

        <Servicos servicos={servicos} />
      </main>

      <Footer texto="AgendaPro © 2026" />
    </>
  );
}

export default App;
