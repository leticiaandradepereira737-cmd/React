import Beneficios from "./components/Beneficios"
import Footer from "./components/Footer"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import Hero from "./components/Hero"
import './App.css'
import Depoimentos from "./components/Depoimentos"
import Contato from "./components/Contato"

function App() {


  return (
    <>
      <Header />

      <Hero
        titulo='Aprenda programação do zero'
        descricao='Um curso para quem quercomeçar na tecnologia.'
        botao='Quero começar'
      />
      <Beneficios />

      <Formulario />
      <Depoimentos />
      <Contato />
      <Footer />
    </>
  )
}

export default App
