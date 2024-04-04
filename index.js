
//array
let participantes = [
  {
    nome: "Samuel Colaço",
    email: "Colaco@gmail",
    datainscricao: new Date(2024, 3, 2, 17, 40),
    datacheckin: new Date(2024, 3, 7, 18, 1)
  },
  {
    nome: "Mayk Brito",
    email: "Mayk@gmail",
    datainscricao: new Date(2024, 1, 2, 18, 30),
    datacheckin: new Date(2024, 1, 5, 18, 30)
  },
  {
    nome: "Fulano de Tal",
    email: "fulano@example.com",
    datainscricao: new Date(2024, 1, 15, 10, 0),
    datacheckin: new Date(2024, 3, 1, 12, 0)
  },
  {
    nome: "Ciclano Silva",
    email: "ciclano@example.com",
    datainscricao: new Date(2024, 0, 20, 9, 0),
    datacheckin: new Date(2024, 2, 5, 16, 30)
  },
  {
    nome: "Beltrano Oliveira",
    email: "beltrano@example.com",
    datainscricao: new Date(2024, 4, 5, 14, 15),
    datacheckin: new Date(2024, 5, 10, 10, 45)
  },
  {
    nome: "Ana Souza",
    email: "ana@example.com",
    datainscricao: new Date(2024, 2, 10, 11, 30),
    datacheckin: new Date(2024, 3, 10, 8, 20)
  },
  {
    nome: "José Santos",
    email: "jose@example.com",
    datainscricao: new Date(2024, 1, 25, 16, 45),
    datacheckin: new Date(2024, 4, 5, 9, 10)
  },
  {
    nome: "Maria Silva",
    email: "maria@example.com",
    datainscricao: new Date(2024, 3, 5, 13, 20),
    datacheckin: new Date(2024, 5, 15, 17, 55)
  },
  {
    nome: "Pedro Oliveira",
    email: "pedro@example.com",
    datainscricao: new Date(2024, 0, 30, 8, 10),
    datacheckin: new Date(2024, 2, 20, 14, 30)
  },
  {
    nome: "Mariana Almeida",
    email: "mariana@example.com",
    datainscricao: new Date(2024, 4, 15, 15, 50),
    datacheckin: new Date(2024, 5, 25, 11, 25)
  }
  // Mais participantes podem ser adicionados aqui conforme necessário
];

const criarnovocodigo = (participante) => {
    const datainscricao = dayjs(Date.now()).to(participante.datainscricao)
  let datacheckin = dayjs(Date.now()).to(participante.datacheckin)
// caso a variavel seja null, realizar o botão dde confirmar o checkin
  if(participante.datacheckin == null){ 
    datacheckin=`
    <button class="checkink" data-email="${participante.email}" onclick="fazerchecki(event)">
    Confirmar Check-in
    </button>
    `
  }
  return ` 
    <tr>
      <td>
         <strong> 
        ${participante.nome} 
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
      </td>
      <td>${datainscricao}</td>
      <td>${datacheckin}</td>
    </tr>
  `
}

const atualizarlista = (participantes) =>{
  //estrutura de repetição
  let output=""
  for(let participante of participantes){
    output = output + criarnovocodigo(participante)
  }

  //Pegar informação do HTML

  //Transportar e substituir elas
  document.querySelector('tbody').innerHTML
  = output
}
atualizarlista(participantes)
const adicionarparticipante=(event) => {
  event.preventDefault()

  const dadosform= new FormData(event.target)

  //Adicionar um novo participante a lista pré-existente
  const participante={
  nome:dadosform.get('nome'),
  email: dadosform.get('email'),
  datainscricao: new Date(),
  datacheckin: null
  }
  //verificando se o email há foi cadastrado
  const existe = participantes.find((p)=>p.email==participante.email
  )
  if(existe){
    alert('Email já cadastrado')
    return
  }
  //acrescentar um novo participante a lista
  participantes= [participante, ...participantes]
  atualizarlista(participantes)

  event.target.querySelector('[name="nome"]').value=""
   event.target.querySelector('[name="email"]').value=""
  

}
//atualizar o checkin
const fazerchecki= event => {
  //perguntar se quer realmente fazer o checkin
  const certeza= confirm('Tem certeza que quer fazer o chek-in?')
  alert(certeza)
  if(certeza==false){
    return
  }
  //procurar o participante na lista
  const participante= participantes.find((p) => {
    return p.email= event.target.dataset.email
  })
  //atualizar o checkin do participante
  participante.datacheckin= new Date()
  //atualizar a lista de participantes
  atualizarlista(participantes)
}

