/*
==========================================================
ATIVIDADES - JAVASCRIPT PURO
map(), filter() e find()
Igor M
==========================================================

INSTRUÇÕES:
- Resolva as atividades usando apenas JavaScript puro.
- Use console.log() para mostrar os resultados.
- Não altere os arrays originais quando o enunciado pedir um novo array.
- Leia o enunciado antes de escolher entre map(), filter() ou find().
*/


// ========================================================
// ATIVIDADE 1 - DOBRO DOS NÚMEROS
// Método: map()
// ========================================================

/*
Enunciado:
Crie um novo array chamado dobrados contendo o dobro de
cada número existente em numeros.

Depois mostre no console:
1. O array original
2. O novo array
*/

const numeros1 = [2, 4, 6, 8, 10];

// Escreva sua resposta abaixo:
const dobrados = numeros1.map((numero)  =>{
    return numero * 2
})

console.log(numeros1)
console.log(dobrados)



// ========================================================
// ATIVIDADE 2 - APLICAR AUMENTO
// Método: map()
// ========================================================

/*
Enunciado:
Os valores abaixo representam preços.

Crie um novo array chamado precosAtualizados em que cada
preço receba um aumento de R$ 10.

Mostre o novo array no console.
*/

const precos = [50, 80, 120, 200];

// Escreva sua resposta abaixo:

const precosAtualizados = precos.map((p)=>{
    return p + 10
})

console.log(precosAtualizados)


// ========================================================
// ATIVIDADE 3 - CRIAR MENSAGENS
// Método: map()
// ========================================================

/*
Enunciado:
Use map() para transformar cada nome em uma mensagem.

Exemplo:
"Ana" deverá virar "Olá, Ana!"

Crie um novo array chamado mensagens.
*/

const nomes = [
  "Ana",
  "Carlos",
  "Marina",
  "Lucas"
];

// Escreva sua resposta abaixo:

const mensagens = nomes.map((n) => {
    return `Olá ${n}`
})

console.log(mensagens)


// ========================================================
// ATIVIDADE 4 - EXTRAIR NOMES DE OBJETOS
// Método: map()
// ========================================================

/*
Enunciado:
O array abaixo contém objetos de alunos.

Crie um novo array chamado nomesAlunos contendo apenas
os nomes dos alunos.

Depois mostre o resultado no console.
*/

const alunosMap = [
  { id: 1, nome: "Ana", nota: 8 },
  { id: 2, nome: "Bruno", nota: 6 },
  { id: 3, nome: "Carla", nota: 9 }
];

// Escreva sua resposta abaixo:
const nomesAluno = alunosMap.map((aluno)=>{
    return aluno.nome
})

console.log(nomesAluno)



// ========================================================
// ATIVIDADE 5 - MAIORES DE IDADE
// Método: filter()
// ========================================================

/*
Enunciado:
Crie um novo array chamado maioresDeIdade contendo apenas
as idades maiores ou iguais a 18.

Mostre o resultado no console.
*/

const idades = [14, 18, 21, 16, 30, 17];

// Escreva sua resposta abaixo:
const maioresDeIdade = idades.filter((idade)=>{
    return idade >= 18
})

console.log(maioresDeIdade)



// ========================================================
// ATIVIDADE 6 - ALUNOS APROVADOS
// Método: filter()
// ========================================================

/*
Enunciado:
Filtre o array de alunos e mantenha somente os alunos
com nota maior ou igual a 6.

Crie um novo array chamado aprovados.
*/

const alunosFilter = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 9 },
  { nome: "Diego", nota: 4 }
];

// Escreva sua resposta abaixo:
const aprovcados = alunosFilter.filter((aluno)=>{
    return aluno.nota >= 6
})

console.log(aprovcados)


// ========================================================
// ATIVIDADE 7 - PRODUTOS BARATOS
// Método: filter()
// ========================================================

/*
Enunciado:
Crie um novo array chamado baratos contendo somente os
produtos com preço menor ou igual a R$ 100.

Mostre o resultado no console.
*/

const produtosFilter = [
  { nome: "Mouse", preco: 70 },
  { nome: "Teclado", preco: 140 },
  { nome: "Headset", preco: 95 },
  { nome: "Monitor", preco: 900 }
];

// Escreva sua resposta abaixo:
const baratos = produtosFilter.filter((produtos)=>{
    return produtos.preco <= 100
})

console.log(baratos)


// ========================================================
// ATIVIDADE 8 - ATENDIMENTOS ONLINE
// Método: filter() (filtrar algo)
// ========================================================

/*
Enunciado:
Filtre os atendimentos e mantenha somente aqueles cuja
modalidade seja "Online".

Crie um novo array chamado online.
*/

const atendimentos = [
  { cliente: "Ana", modalidade: "Online" },
  { cliente: "Bruno", modalidade: "Presencial" },
  { cliente: "Carla", modalidade: "Online" },
  { cliente: "Diego", modalidade: "Presencial" }
];

// Escreva sua resposta abaixo:
const online = atendimentos.filter((atendimentos)=>{
    return atendimentos.modalidade === "Online"
})

console.log(online)



// ========================================================
// ATIVIDADE 9 - ENCONTRAR ALUNO PELO ID
// Método: find() (algo exato)
// ========================================================

/*
Enunciado:
Use find() para localizar o aluno que possui id igual a 3.

Guarde o resultado em uma variável chamada alunoEncontrado.
*/

const alunosFind = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Bruno" },
  { id: 3, nome: "Carla" },
  { id: 4, nome: "Diego" }
];

// Escreva sua resposta abaixo:
const aluno = alunosFind.find((aluno)=>{
    return aluno.id === 3
})

console.log(aluno)



// ========================================================
// ATIVIDADE 10 - ENCONTRAR SERVIÇO
// Método: find()
// ========================================================

/*
Enunciado:
Use find() para procurar a String "Avaliação" dentro
do array de serviços.

Guarde o resultado em servicoEncontrado.
*/

const servicos = [
  "Consulta Inicial",
  "Retorno",
  "Avaliação",
  "Orientação"
];

// Escreva sua resposta abaixo:
const servico = servicos.find((s)=>{
    return s === "Avaliação"
})

console.log(servico)



// ========================================================
// ATIVIDADE 11 - PRIMEIRO PRODUTO ACIMA DE R$ 100
// Método: find()
// ========================================================

/*
Enunciado:
Encontre o primeiro produto cujo preço seja maior que
R$ 100.

Guarde o resultado em produtoEncontrado.
*/

const produtosFind = [
  { nome: "Mouse", preco: 70 },
  { nome: "Teclado", preco: 140 },
  { nome: "Headset", preco: 95 },
  { nome: "Monitor", preco: 900 }
];

// Escreva sua resposta abaixo:




// ========================================================
// ATIVIDADE 12 - BUSCAR USUÁRIO POR EMAIL
// Método: find()
// ========================================================

/*
Enunciado:
Localize o usuário cujo email seja:

carla@email.com

Guarde o resultado em usuarioEncontrado.
*/

const usuarios = [
  { id: 1, nome: "Ana", email: "ana@email.com" },
  { id: 2, nome: "Bruno", email: "bruno@email.com" },
  { id: 3, nome: "Carla", email: "carla@email.com" }
];

// Escreva sua resposta abaixo:




// ========================================================
// ATIVIDADE 13 - NOMES DOS APROVADOS
// Métodos: filter() + map()
// ========================================================

/*
Enunciado:
Faça a atividade em duas etapas:

1. Use filter() para criar um novo array chamado aprovados2
   contendo somente os alunos com nota maior ou igual a 6.

2. Use map() no array aprovados2 para criar outro array
   chamado nomesAprovados contendo somente os nomes.
*/

const alunosCombinado = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 9 },
  { nome: "Diego", nota: 4 }
];

// Escreva sua resposta abaixo:
const aprovados2 = alunosCombinado.filter((n)=>{
    return n.nota >= 6
})

const nomeAprovados = aprovados2.map((aprovados)=>{
    return aprovados.nome
})

console.log('Nome aprevados', nomeAprovados)



// ========================================================
// ATIVIDADE 14 - PRODUTOS EM PROMOÇÃO
// Métodos: filter() + map()
// ========================================================

/*
Enunciado:
Faça a atividade em duas etapas:

1. Use filter() para selecionar somente os produtos com
   preço maior que R$ 100.

2. Use map() no resultado para criar um novo array em que
   cada preço tenha desconto de R$ 20.

Mostre o resultado no console.
*/

const produtosPromocao = [
  { nome: "Mouse", preco: 70 },
  { nome: "Teclado", preco: 140 },
  { nome: "Monitor", preco: 900 }
];

// Escreva sua resposta abaixo:
const produtosAcimaDe100 = produtosPromocao.filter((produto)=>{
    return produto.preco > 100
})

const produtoComDesconto = produtosAcimaDe100.map((produto)=>{
    return { 
    nome: produto.nome,
    preco: produto.preco - 20
    }
})

console.log('Produtos em promoção', produtoComDesconto)



// ========================================================
// ATIVIDADE 15 - DESAFIO FINAL
// Métodos: map() + filter() + find()
// ========================================================

/*
Enunciado:
Use o mesmo array para realizar três tarefas diferentes.

1. map()
   Crie um novo array chamado nomesFuncionarios contendo
   somente os nomes dos funcionários.

2. filter()
   Crie um novo array chamado maioresSalarios contendo
   os funcionários com salário maior ou igual a R$ 3000.

3. find()
   Encontre o funcionário cujo id seja igual a 3 e guarde
   o resultado em funcionarioEncontrado.

Mostre os três resultados no console.
*/

const funcionarios = [
  { id: 1, nome: "Ana", salario: 2500 },
  { id: 2, nome: "Bruno", salario: 3200 },
  { id: 3, nome: "Carla", salario: 4500 },
  { id: 4, nome: "Diego", salario: 2800 }
];

// Escreva sua resposta abaixo:
const nomesFuncionando = funcionarios.map((funcionario)=>{
    return funcionario.nome
})



/*
==========================================================
PERGUNTAS FINAIS
==========================================================

1. Qual é a principal diferença entre map() e filter()?

2. Por que find() não retorna um array como filter()?

3. Em qual situação você escolheria filter() em vez de find()?

4. O que representa o parâmetro recebido dentro de
   map(), filter() ou find()?

==========================================================
*/