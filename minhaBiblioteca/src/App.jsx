import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import Card from "./components/Card";
import FormularioLivro from "./components/FormularioLivro";
import Filtros from "./components/Filtros";
import ListaLivros from "./components/ListaLivros";
import DetalhesLivro from "./components/DetalhesLivro";

function App() {
  const livrosIniciais = [
    { id: 1, titulo: "Quarta Asa", autor: "Rebecca Yorros", categoria: "Fantasia", lido: false },
    { id: 2, titulo: "Amor Teoricamente", autor: "Ali Hazelwood", categoria: "Romance", lido: true },
    { id: 3, titulo: "O Acordo", autor: "Elle Kennedy", categoria: "Romance", lido: false },
    { id: 4, titulo: "Jogos Vorazes", autor: "Suzanne Collins", categoria: "Ficção Científica", lido: false }
  ];

  const livrosSalvos = localStorage.getItem('livros');

  const [livros, setLivros] = useState(() => {
    return livrosSalvos ? JSON.parse(livrosSalvos) : livrosIniciais;
  });

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [filtro, setFiltro] = useState('todos');
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  useEffect(() => {
    localStorage.setItem('livros', JSON.stringify(livros));
  }, [livros]);

  function adicionarLivro(e) {
    e.preventDefault();

    if (!titulo || titulo.trim() === '') {
      toast.error('Digite o título do livro');
      return;
    }
    if (!autor || autor.trim() === '') {
      toast.error('Digite o autor do livro');
      return;
    }
    if (!categoria || categoria.trim() === '') {
      toast.error('Digite a categoria do livro');
      return;
    }

    const novoLivro = {
      id: Date.now(),
      titulo: titulo.trim(),
      autor: autor.trim(),
      categoria: categoria.trim(),
      lido: false
    };

    setLivros([...livros, novoLivro]);

    setTitulo('');
    setAutor('');
    setCategoria('');

    toast.success('Livro adicionado com sucesso!');
  }

  function marcarComoLido(id) {
    const livrosAtualizados = livros.map((livro) => {
      if (livro.id === id) {
        return {
          ...livro,
          lido: true
        };
      }
      return livro;
    });

    setLivros(livrosAtualizados);
    toast.success('Marcado como lido!');
  }

  function selecionarLivro(id) {
    setLivroSelecionado(id);
  }

  function fecharDetalhes() {
    setLivroSelecionado(null);
  }

  const livrosFiltrados = livros.filter((livro) => {
    if (filtro === 'lidos') {
      return livro.lido === true;
    }
    if (filtro === 'quero-ler') {
      return livro.lido === false;
    }
    return true;
  });

  const livroEncontrado = livros.find((livro) => {
    return livro.id === livroSelecionado;
  });

  return (
    <main className="app">
      <ToastContainer position="top-right" autoClose={2500} theme='dark' />

      <div className="container">
        <Header />

        <Card titulo={'Adicionar livro'}>
          <FormularioLivro
            titulo={titulo}
            setTitulo={setTitulo}
            autor={autor}
            setAutor={setAutor}
            categoria={categoria}
            setCategoria={setCategoria}
            adicionarLivro={adicionarLivro}
          />
        </Card>

        <Card titulo={'Filtrar livros'}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
        </Card>

        <Card titulo={'Livros'}>
          <ListaLivros 
            livros={livrosFiltrados}
            selecionarLivro={selecionarLivro}
            marcarComoLido={marcarComoLido}      
          />
        </Card>

        {livroEncontrado && (
          <DetalhesLivro
            livro={livroEncontrado}
            fecharDetalhes={fecharDetalhes}
          />
        )}
      </div>
    </main>
  );
}

export default App;