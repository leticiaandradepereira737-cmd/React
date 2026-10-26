function FormularioFilme({
    titulo,
    setTitulo,
    genero,
    setGenero,
    adicionarFilme,
}) {
  return (
    <form className="formulario">
        <div className="campo">
            <label htmlFor="titulo">Título</label>

            <input 
            id="titulo"
            type="text"
            placeholder="Digite o título do filme"
            value={titulo}
            onChange={(e) => {
                setTitulo(e.target.value)
            }} 
            />
        </div>
        <div className="campo">
            <label htmlFor="genero">Título</label>

            <input 
            id="genero"
            type="text"
            placeholder="Ex: Ação"
            value={genero}
            onChange={(e) => {
                setGenero(e.target.value)
            }} 
            />
        </div>
        <button type="submit">Adicionar filme</button>
    </form>
  )
}

export default FormularioFilme