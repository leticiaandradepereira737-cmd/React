// HERO QUER DIZER "CONTEÚDO PRINCIPAL DO SITE"


function Hero({ titulo, descricao, botao}) {
    return (
        <section>
            <div className="hero" id="inicio">
                <div className="hero-texto">
                    <p>APRENDA NA PRÁTICA</p>
                    <h1>{titulo}</h1>
                    <p>{descricao}</p>
                    <button >{botao}</button>
                </div>

            </div>
            <div className="img-content">
                <img src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?auto=format&fit=crop&w=1200&q=80"
                    alt="Notebook com código de programação "

                    className="hero-imagem" />
            </div>
        </section>
    )
}

export default Hero