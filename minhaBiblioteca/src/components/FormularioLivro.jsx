function FormularioLivro({
    titulo,
    setTitulo,
    autor,
    setAutor,
    categoria,
    setCategoria,
    adicionarLivro
}) {
    
  return (
    <form className="formulario" onSubmit={adicionarLivro}>
        <div className="campo">
            <label htmlFor="titulo"></label>
            <input 
            id="titulo"
            type="text" 
            placeholder="Digite o titulo do livro"
            value={titulo}
            onChange={(e) => {
                setTitulo(e.target.value)
            }}
            />
        </div>
        <div className="campo">
            <label htmlFor="autor"></label>
            <input 
            id="autor"
            type="text" 
            placeholder="Digite o autor do livro"
            value={autor}
            onChange={(e) => {
                setAutor(e.target.value)
            }}
            />
        </div>
        <div className="campo">
            <label htmlFor="categoria"></label>
            <input 
            id="categoria"
            type="text" 
            placeholder="Ex: Fantasia, Romance"
            value={categoria}
            onChange={(e) => {
                setCategoria(e.target.value)
            }}
            />
        </div>

        <button type="submit">Adicionar livro</button>
    </form>
  );
}

export default FormularioLivro;