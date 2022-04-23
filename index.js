/*  
-Inicialização do projeto NodeJS através do comando => npm init -y  =>Criando o arquivo package.json será criado
-Instalação do express => npm install express (Já instala o Node)
-Criar o arquivo index
-Para rodar a aplicação pelo terminal digitar node => nomeDaPasta 
-URL para testes no thunder http://localhost:3001/
-Instalar o nodemon => npm i nodemon -D => facilita start da aplicação O nodemon é uma biblioteca que facilita a programação em
Node, tendo a função de ver as alterações do código e reiniciar a aplicação automaticamente, sem a necessidade de que façamos isso.
Após a instalação do nodemon, ir ao package.json e em scripts colocar "start": "node index", "dev": "nodemon Index", assim para 
rodar a aplicação digitar no terminal => npm run dev
-Com o nodemon instalado e configurado iniciar a aplicação API através do comando no terminal => npm run dev
-Instalar o cors => npm install cors => o cors é considerado um middle, ele que vai garantir a permissão de acesso para o 
compartilhamento de recursos com origens diferentes (Cross-Origin Resource Sharing).
Toda vez que o frontend tenta se comunicar com o back-end, é feita uma requisição e o  back-end (API) devolve uma resposta, 
o CORS serve para proteger as requisições para que sites com alguma requisição (GET, PUT, PATCH e outras) potencialmente perigosa,
só seja liberado caso o acesso tenha sido liberado na API.
-Instalar o server => npx http-server .  NÃO USAR EM PRODUÇÃO PQ PODE SER RACKEADO (para rodar a aplicação)
*/


const express = require('express'); //A declaração require para importar o express
const cors = require('cors');
const port = 3001;

const app = express(); //Instância do express A execução do express, que será a nossa aplicação armazenada na variável app
app.use(cors());//

app.use(express.json());//Seta qual a comunicação de back e front (json javascript object notation , é o mais comum)

const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

//Uma declaração de endpoint (app.get) para preparar a aplicação para receber uma requisição e enviar uma resposta;
//Defini a rota que será utilizada e criar uma função de callback onde se utilizará response.send para enviar as informações de todas as paletas para o frontend.
app.get('/', (req, res) => {
  res.send('hello world');
});
//req, resp => requisição e resposta
app.get('/paletas', (req, res) => { //Requisição 0para receber os dados do back
  res.send(paletas);
});

// definição de parâmetro de url opcional no express (:id)?
app.get('/paletas/find/(:id)?', (req, res) => {
  const idParam = req.params.id; // Id como parâmetro de url, que vem do req pegando como parâmetro o id
  const unicaPaleta = paletas.find((paleta) => paleta.id == idParam);// método find do js, pegando a lista de paletas e extraindo uma paleta que tenha o id seja igual ao idParam(passado na requisição) find é um método que tem uma função dentro, atribuindo a variável única paleta
  console.log(unicaPaleta);
  if (unicaPaleta === undefined) {//Tornando a inclusão do id opcional, caso não tenha um id na rota tendo como resposta undefined, podemos em um if enviar a mensagem de erro, quando colocamos esse parâmetro opcional, não dá erro na aplicação, mesmo sem o id, dá o status 200
    res.send({ message: 'Nenhuma paleta foi encontrada' });
  }
  res.send(unicaPaleta);//Se tiver o id, traz a resposta da única paleta
});

//Declaração app.listen para termos uma melhor visualização de que a nossa aplicação está rodando, vamos exibir uma mensagem no terminal quando iniciarmos o nosso index.js. Para isso acontecer, vamos definir uma função de callback no app.listen e uma constante port: */
app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});


/* JSON

JSON é uma estrutura de dados que, dentre outras utilizações, é comumente utilizada para troca de informações entre sistemas.
JSON significa JavaScript Object Notation, ou seja, é baseado na sintaxe de declaração de objetos do JavaScript. A principal 
diferença é que objetos JSON precisam que os nomes de suas chaves estejam entre aspas duplas ("").
Algumas vantagens de usar JSON são:
Leitura mais simples
Velocidade maior na execução e transporte de dados
Arquivo com tamanho reduzido */
