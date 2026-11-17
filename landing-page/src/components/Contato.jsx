import Input from "./Input";

function Contato() {
    return (
        <section className="entre-contato" id="entre-contato">
            <h2>Entre em contato</h2>

            <form>
                <Input
                    label="Nome"
                    tipo="text"
                    id="contato-nome"
                    placeholder="Digite seu nome"
                />

                <Input
                    label="Email"
                    tipo="email"
                    id="contato-email"
                    placeholder="Digite seu e-mail"
                />

                <Input
                    label="Assunto"
                    tipo="text"
                    id="contato-assunto"
                    placeholder="Digite o assunto"
                />

                <Input
                    label="Telefone"
                    tipo="tel"
                    id="contato-telefone"
                    placeholder="Digite seu telefone"
                />

                <button type="submit">
                    Enviar mensagem
                </button>
            </form>
        </section>
    );
}

export default Contato;