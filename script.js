const baseUrl = 'http://localhost:3001';

const findPaletas = async () => {
  /* Função que faz a solicitação ao banco de dados o ASYNC permite que a aplicação continue rodando enquanto fazemos a requisição ao banco de dados */
  const response = await fetch(`${baseUrl}/paletas`);
  const paletas =
    await response.json(); /* solicitação que a informção venha em formato json */
  paletas.forEach((paleta) => {
    document.getElementById('paletaList').insertAdjacentHTML(
      /* insertAdjacentHTML, insere um o elemento nela contida em paletaList,  */
      'beforeend' /* Indicamos a posição e em seguida o conteudo(text) dentro de template */,
      `<div class="PaletaListaItem">
          <div>
              <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
              <div class="PaletaListaItem__preco">R$ ${paleta.preco.toFixed(
                /* Indicamos o número de casas decimais depois da vírgula que o preço irá apresentar em tela */
                2,
              )}</div>
              <div class="PaletaListaItem__descricao">${paleta.descricao}</div>
            </div>
              <img class="PaletaListaItem__foto" src=${
                paleta.foto
              } alt=${`Paleta de ${paleta.sabor}`} />
          </div>`,
    );
  });
};

const findPaletaById = async () => {
  //Função que encontra a paleta por id
  const id = document.getElementById('idPaleta').value; //id da paleta que vamos buscar, é colocado como props o id que está no input. value para trazer a informação

  const response = await fetch(`${baseUrl}/find-paleta/${id}`); //requisição para o backend com a url editada no back para esse getid

  const paleta = await response.json(); //converte a resposta em formato json

  const paletaEscolhidaDiv = document.getElementById('paletaEscolhida'); //const que exibe a paleta em tela passando como props o id da div que ela será exibida
  //pela a const e criamos um elemento card nessa div
  paletaEscolhidaDiv.innerHTML = `
  <div class="PaletaCardItem"> 
    <div>
      <div class="PaletaCardItem__sabor">${paleta.sabor}</div>
      <div class="PaletaCardItem__preco">R$ ${paleta.preco.toFixed(2)}</div>
      <div class="PaletaCardItem__descricao">${paleta.descricao}</div>
    </div>
      <img class="PaletaCardItem__foto" src=${
        paleta.foto
      } alt=${`Paleta de ${paleta.sabor}`} />
  </div>`;
};

findPaletas();
