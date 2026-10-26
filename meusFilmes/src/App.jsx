import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Card from "./components/Card";
import FormularioFilme from "./components/FormularioFilme";
import Filtro from "./components/Filtros";
import ListaFilmes from "./components/ListaFilmes";

function App() {

    const filmesSalvos = localStorage.getItem('filmes')

    const [filmes, setFilmes] = useState(filmesSalvos)
    const [titulo, setTitulo] = useState('')
    const [genero, setGenero] = useState('')
    const [filtro, setFiltro] = useState('todos')
    const [filmeSelecionado, setFilmeSelecionado] = useState(null)

    useEffect(() => {
        localStorage.setItem('filmes', JSON.stringify(filmes))
    }, [filmes])

    function adicionarFilme(e) {
        e.preventDefault()

        if (titulo.trim === '') {
            toast.error('Digite o nome do filme')
        }
        if (genero.trim === '') {
            toast.error('Digite o genero do filme')
        }

        const novoFilme = {
            id: Date.now(),
            titulo: titulo,
            genero: genero,
            assistido: false
        }

        setFilmes(...filmes, novoFilme)

        setTitulo('')
        setGenero('')

        toast.success('Filme adicionado!')

    }

    function marcarComoAssistido(id) {
        const filmesAtualizados = filmes.map((filme) => {
            if (filme.id === id) {
                return {
                    ...filme,
                    assistido: true
                };
            }

            return filme;
        });

        setFilmes(filmesAtualizados)

        toast.success('Marcado como assistido!')

        function selecionarFilme(id) {
            setFilmeSelecionado(id)
        }

        function fecharDetalhes() {
            setFilmeSelecionado(null)
        }

        const filmesFiltrados = filmes.filter((filmes) => {
            if (filtro === 'assistidos') {
                return filmes.assistido === true
            }

            if (filtro === 'pendentes') {
                return filmes.assistido === false
            }

            return true
        })

        const filmeEncontrado = filmes.find((filmes) => {
            return filmes.id === filmeSelecionado
        })
    }

    return (
        <main className="app">
            <ToastContainer position="top-right" autoClose={2500} theme='dark' />

            <div className="container">
                <Header />

                <Card titulo={'Adicionar filme'}>
                    <FormularioFilme
                        titulo={titulo}
                        setTitulo={setTitulo}
                        setGenero={setGenero}
                        adicionarFilme={adicionarFilme}

                    />
                </Card>

                <Card titulo={'Filtrar filmes'}>
                    <Filtro filtro={filtro} setFiltro={setFiltro} />
                </Card>

                <Card titulo={'Filmes'}>
                    <ListaFilmes 
                    filmes={filmesFiltrados}
                    selecionarFilme={selecionarFilme}
                    marcarComoAssistido={marcarComoAssistido}          
                    />
                </Card>

                {filmeEncontrado && (
                    <DetalhesFilme
                    filme={filmeEncontrado}
                    fecharDetalhes={fecharDetalhes}
                    />
                )}
            </div>
        </main>
    )

}

export default App;