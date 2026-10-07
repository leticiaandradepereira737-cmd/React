import { useState } from "react";

function FormularioCadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [curso, setCurso] = useState('')
    const [mensagem, setMensagem] = useState('')

    const [dadosEnviados, setDadosEnviados] = useState(null)

    function enviarFormulario(e) {
        e.preventDefault()

        // console.log(nome)
        // console.log(email)
        // console.log(curso)
        // console.log(mensagem)

        setNome('')
        setEmail('')
        setCurso('')
        setMensagem('')

        setDadosEnviados({
            nome,
            email,
            curso,
            mensagem
        });
    }

    return (
        <form className="formulario" onSubmit={enviarFormulario}>
            <h2>Cadastro</h2>

            <label htmlFor="nome">Nome</label>
            <input type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => {
                    setNome(e.target.value);
                }}
                required
            />

            <label htmlFor="email">Email</label>
            <input type="email"
                id="email"
                name="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                required
            />

            <label htmlFor="curso">Curso</label>
            <select type="curso"
                id="curso"
                name="curso"
                value={curso}
                onChange={(e) => {
                    setCurso(e.target.value);
                }}
                required
            >
                <option value="" disabled>
                    Selecione um curso
                </option>
                <option value="react">React</option>
                <option value="javascript">JavaScript</option>
                <option value="node">Node.js</option>
            </select>

            <label htmlFor="mensagem">Mensagem</label>
            <textarea type="mesagem"
                id="mensagem"
                name="mensagem"
                placeholder="Escreva uma mensagem"
                value={mensagem}
                onChange={(e) => {
                    setMensagem(e.target.value);
                }}
            />

            <button type="submit">Cadastrar</button>

            <h1>Dados preenchidos</h1>
            {nome ? <p>Nome: {nome}</p> : 'Nome não digitado'}
            {/* <p>Nome: {nome}</p> */}
            <p>Email: {email}</p>
            <p>Curso: {curso}</p>
            <p>Mensagem: {mensagem}</p>

        </form>
    );
}

export default FormularioCadastro;