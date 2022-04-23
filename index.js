/* Npm init -y
instalar o express => npm install express (Já instala o node)
Criar o arquivo index
node nomedapasta => para rodar
  No tander fazer um get teste => http://localhost:3001/
  Instalar o nodemon => npm i nodemon -D => facilita startr a aplicação
Após a instalação do nodemon, ir ao package.json e em scripts colocar "start": "node index", "dev": "nodemon Index", assim para startar a aplicação rodar no terminal => npm run dev
Instalar o cors => npm install cors => o cors é considerado um middle
Ir para o index.html*/
//-Instalar o server => npx http-server .  NÃO USAR EM PRODUÇÃO PQ PODE SER RACKEADO(para rodar a aplicação)
const express = require('express');
const cors = require('cors');
const port = 3001;

const app = express(); //Instancia do express
app.use(cors());//

app.use(express.json());//Seta qual a comunicação de back e front (json jacasrcipt object notetion , é o mais comum)

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

app.get('/', (req, res) => {
  res.send('hello world');
});
//req, resp => requisição e resposta
app.get('/paletas', (req, res) => { //Requisição 0para receber os dados do back
  res.send(paletas);
});

// definição de parametro de url opcional no express (:id)?
app.get('/paletas/find/(:id)?', (req, res) => {
  const idParam = req.params.id; // Id como parametro de url, que vem do req pegando como parametro o id
  const unicaPaleta = paletas.find((paleta) => paleta.id == idParam);// metodo find do js, pegando a lista de paletas requerindo uma paleta que tenha o id seja igual ao idparam(passado na requisição) find é um metodo que tem uma função dentro, atribuindo a variável unica paleta
  console.log(unicaPaleta);
  if (unicaPaleta === undefined) {//Tornando a inclusão do id opcional, caso não tenha um id na rota tendo como resposta undefined, podemos em um if enviar a mensagem de erro, quando colocamos esse parametro opciona, não dá erro na aplicação, mesmo sem o id, dá o status 200
    res.send({ message: 'Nenhuma paleta foi encontrada' });
  }
  res.send(unicaPaleta);//Se tiver o id, traz a resposta da unica paleta
});

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});
